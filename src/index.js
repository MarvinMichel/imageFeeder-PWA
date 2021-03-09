// Styling
import './styles/style.css'

// Modules
import { resizeGridItems } from './modules/resizeGridItems.js'

// Components
import Header from './components/organisms/Header.js'
import Navigation from './components/organisms/Navigation.js'

// // Client-side router
// import Router from './router/router.js'
// import routes from './router/routes.js'

// Elements
const body = document.querySelector('body')
const main = document.querySelector('main')

// Insert elements
body.prepend(Header())
main.prepend(Navigation())

// // Create instance of client-side router
// const router = new Router(routes)

// Resize grid on window resize
// window.addEventListener('popstate', () => router._loadInitialRoute(false))
window.addEventListener('resize', resizeGridItems)

export { main }