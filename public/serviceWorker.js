const CORE_CACHE_VERSION = 'v1'
const CORE_ASSETS = [
  '/dist/main.min.js',
  '/dist/main.min.css',
  '/images/favicon.svg',
  '/images/android-chrome-512x512.png',
  '/images/apple-touch-icon.png',
  '/images/safari-pinned-tab.svg',
  '/images/header.jpg'
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(CORE_CACHE_VERSION)
      .then(cache => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  )
})

self.addEventListener('fetch', event => {
  if (isCoreRequest(event.request)) {
    event.resondWith(
      caches.open(CORE_CACHE_VERSION)
      .then(cache => cache.match(event.request.url))
    )
  }
})

/**
 * 
 * @param {Object} request
 * @returns {Boolean} checks if requesting core asset(s)
 */
function isCoreRequest(request) {
  return request.method === 'GET' && CORE_ASSETS.includes(
    getPathname(request.url)
  )
}

/**
 * 
 * @param {Object} requestURL
 * @returns {String} relative URL
 */
function getPathname(requestURL) {
  const url = new URL(requestURL)
  return url.pathname
}