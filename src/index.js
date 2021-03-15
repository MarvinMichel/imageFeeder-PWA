// Modules
import { resizeGridItems } from './modules/resizeGridItems.js'
import { setActiveTab } from './modules/setActiveTab.js'

// Styling
import './styles/style.css'

window.addEventListener('load', () => {
  setActiveTab()
  resizeGridItems()
})

window.addEventListener('resize', resizeGridItems)