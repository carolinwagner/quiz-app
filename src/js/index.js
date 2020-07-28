import { initBookmarkToggle } from './bookmark'
import { initShowAnswer, initCards } from './card'
import { initFormSubmit } from './create'
import { initDarkmode } from './darkmode'
import { initNavigation } from './navigation'

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    initCards()
    initNavigation()
    initDarkmode()
    initBookmarkToggle()
    initShowAnswer()
    initFormSubmit()
  })
})
