// Modules
import { resizeGridItems } from './modules/resizeGridItems.js'
import { setActiveTab } from './modules/setActiveTab.js'

// Styling
import './styles/style.css'

window.addEventListener('load', () => {
  setActiveTab()

  if ('CSS' in window && !window.CSS.supports('grid-template-rows', 'masonry')) {
    resizeGridItems()
    window.addEventListener('resize', resizeGridItems)
  }

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.info("service worker registered", res))
      .catch(err => console.warn("service worker not registered", err))
  }
})