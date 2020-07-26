import { initBookmarkToggle } from './bookmark'
import { initShowAnswer } from './card'
import { initFormSubmit } from './create'
import { initDarkmode } from './darkmode'
import { initNavigation } from './navigation'

function init() {
  initNavigation()
  initDarkmode()
  initBookmarkToggle()
  initShowAnswer()
  initFormSubmit()
}

init()

export function setupStorybook() {
  console.log('-------- Setting up Storybook ---------')
  const root = document.querySelector('#root')
  const observer = new MutationObserver(init)
  observer.observe(root, { childList: true })
}
