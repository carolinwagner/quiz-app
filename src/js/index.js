console.log('it works')

import { get, getAll } from './util'
import { initNavigation } from './navigation'
import { darkmode } from './darkmode'
import { bookmark } from './bookmark'
import { showAnswer } from './card'

initNavigation()
darkmode()
bookmark()
showAnswer()
get()
getAll()
