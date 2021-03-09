/* global imagesLoaded */

// Modules
import { setActiveTab } from '../modules/setActiveTab.js'
import { resizeInstance } from '../modules/resizeGridItems.js'
import { removeContent } from '../modules/removeContent.js'

// Components
import LoadingElement from '../components/atoms/LoadingElement.js'

// Elements
const contentContainer = document.getElementById('content')
const loading = LoadingElement()

// Client-side router
class Router {
  constructor(routes) {
    this.routes = routes
    this._loadInitialRoute()
  }

  loadRoute(pushState, ...urlSegments) {
    /**
     * @template Loading()
     * @template contentData
     * @function setActiveTab()
     * @returns Filled content container with feed
     */
    removeContent(contentContainer)
    contentContainer.insertAdjacentHTML('beforeend', loading)

    const matchedRoute = this._matchUrlToRoute(urlSegments)
    
    if (pushState) {
      const title = urlSegments[0]
      const url = `/${urlSegments.join('/')}`
      history.pushState({ title: title }, '', url)
    }

    matchedRoute.render(matchedRoute.params)
      .then(renderData => {
        removeContent(contentContainer)
        contentContainer.appendChild(renderData)
      }).finally(() => {
        // Resize feed grid when images are fully loaded
        setActiveTab(urlSegments[0])
        const gridCells = document.querySelectorAll('.feed--image')
        gridCells.forEach((gridCell) => imagesLoaded(gridCell, resizeInstance))
      })
  }

  _matchUrlToRoute(urlSegments) {
    /**
     * @param urlSegments
     * @param routePathSegments
     * @returns mathed route and optional parameters
     */
    const routeParams = {}

    const matchedRoute = this.routes.find(route => {
      const routePathSegments = route.path.split('/').slice(1)

      if (routePathSegments.length !== urlSegments.length) return false

      const match = routePathSegments.every((routePathSegment, i) => {
        return routePathSegment === urlSegments[i] || routePathSegment[0] === ':'
      })

      if (match) {
        routePathSegments.forEach((segment, i) => {
          if (segment[0] === ':') {
            const propName = segment.slice(1)
            routeParams[propName] = decodeURIComponent(urlSegments[i])
          }
        })
      }
      return match
    })
    return { ...matchedRoute, params: routeParams }
  }

  _loadInitialRoute(pushState = true) {
    /**
     * @param pushState boolean: push the history state
     * @param pathnameSplit
     * @param pathSegments
     * @returns Inital Route
    */
    const pathnameSplit = window.location.pathname.split('/')
    const pathSegments = pathnameSplit.length > 1 && pathnameSplit.slice(1)
    
    this.loadRoute(pushState, ...pathSegments)
  }
}

export default Router