// Modules
import { resizeGridItems } from './modules/resizeGridItems.js'
import { setActiveTab } from './modules/setActiveTab.js'

// Styling
import './styles/style.css'

window.addEventListener('load', () => {
	resizeGridItems()
	setActiveTab()
})
window.addEventListener('resize', resizeGridItems)