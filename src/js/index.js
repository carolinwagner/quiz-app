import { initBookmarkToggle } from './bookmark'
import { initShowAnswer } from './card'
import { initFormSubmit } from './create'
import { initDarkmode } from './darkmode'
import { initNavigation } from './navigation'

document.addEventListener('DOMContentLoaded', () => {
  initNavigation()
  initDarkmode()
  initBookmarkToggle()
  initShowAnswer()
  initFormSubmit()
})
