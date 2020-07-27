import { initBookmarkToggle } from './bookmark'
import { initShowAnswer, createCard } from './card'
import { initFormSubmit } from './create'
import { initDarkmode } from './darkmode'
import { initNavigation } from './navigation'

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    createCard()
    initNavigation()
    initDarkmode()
    initBookmarkToggle()
    initShowAnswer()
    initFormSubmit()
  })
})
