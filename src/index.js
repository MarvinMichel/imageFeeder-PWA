// Modules
import { resizeGridItems } from './modules/resizeGridItems.js'
import { setActiveTab } from './modules/setActiveTab.js'

// Styling
import './styles/style.css'

// window.addEventListener('load', () => {
//   if ('serviceWorker' in navigator) {
//     navigator.serviceWorker
//       .register('/serviceWorker.js', { scope: '/' })
//       .then(res => console.info('service worker registered at', res.scope))
//       .catch(err => console.err('service worker not registered', err))
//   }
// })

window.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.feed')) {
    setActiveTab()

    if ('CSS' in window && !window.CSS.supports('grid-template-rows', 'masonry')) {
      resizeGridItems()
      window.addEventListener('resize', resizeGridItems)
    }

    // Lazyload images in feed
    if ('IntersectionObserver' in window) {
      const lazyloadImages = document.querySelectorAll('.lazy')
      const imageObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const image = entry.target
            image.src = image.dataset.src
            image.classList.remove('lazy')
            imageObserver.unobserve(image)
          }
        })
      })

      lazyloadImages.forEach(image => {
        imageObserver.observe(image)
      })
    }
  }
})