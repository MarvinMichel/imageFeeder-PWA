// Modules
import { resizeGridItems } from './modules/resizeGridItems.js'
import { setActiveTab } from './modules/setActiveTab.js'

// Styling
import './styles/style.css'

window.addEventListener('load', () => {
  if (document.querySelector('.feed')) {
    setActiveTab()

    if ('CSS' in window && !window.CSS.supports('grid-template-rows', 'masonry')) {
      resizeGridItems()
      window.addEventListener('resize', resizeGridItems)
    }
  }

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.info("service worker registered at", res.scope))
      .catch(err => console.err("service worker not registered", err))
  }
})