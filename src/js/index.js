import { initBookmarkToggle } from './bookmark'
import { initShowAnswer, initCard } from './card'
import { initFormSubmit } from './create'
import { initDarkmode } from './darkmode'
import { initNavigation } from './navigation'

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    initCard()
    initNavigation()
    initDarkmode()
    initBookmarkToggle()
    initShowAnswer()
    initFormSubmit()
  })
})
