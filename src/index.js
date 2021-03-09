// Modules
import imagesLoaded from 'imagesloaded'
import {
	resizeGridItems,
	resizeInstance
} from './modules/resizeGridItems.js'

// Styling
import './styles/style.css'

window.addEventListener('load', resizeGridItems )
window.addEventListener('resize', resizeGridItems)