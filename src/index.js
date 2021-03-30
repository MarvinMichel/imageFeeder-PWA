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

const masonrySupported = ('CSS' in window && window.CSS.supports('grid-template-rows', 'masonry'))

document.addEventListener('DOMContentLoaded', () => {
  if (!masonrySupported && document.querySelector('.feed')) {
    resizeGridItems()
    setActiveTab()
    window.addEventListener('resize', resizeGridItems)
  }
})

window.addEventListener('load', () => {
  // Lazyload images
  if ('IntersectionObserver' in window) {
    const lazyloadImages = document.querySelectorAll('.lazy')
    
    const imageObserver = new IntersectionObserver(entries => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          console.log(index, 'Is intersecting with viewport')
          const image = entry.target
          image.src = image.dataset.src
          image.srcset = image.dataset.srcset
          image.classList.remove('lazy')
          imageObserver.unobserve(image)
        }
      })
    })

    lazyloadImages.forEach(image => {
      imageObserver.observe(image)
    })
  }
})