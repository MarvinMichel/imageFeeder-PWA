const CORE_CACHE_VERSION = 'v6'
const CORE_ASSETS = [
  '/dist/main.min.js',
  '/dist/main.min.css',
  '/images/favicon.svg',
  '/images/android-chrome-512x512.png',
  '/images/apple-touch-icon.png',
  '/images/safari-pinned-tab.svg',
  '/images/header.jpg',
  'site.webmanifest',
  '/offline',
  '/'
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CORE_CACHE_VERSION)
      .then(cache => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  )
})

self.addEventListener('fetch', event => {
  const request = event.request

  if (isCoreRequest(request)) {
    event.respondWith(
      caches.open(CORE_CACHE_VERSION)
        .then(cache => cache.match(request.url))
    )
  } else if (isHTMLRequest(request)) {
    event.respondWith(
      caches.open('html-cache')
        .then(cache => cache.match(request.url))
        .then(response => {
          return response
            ? response
            : fetchAndCache(request, 'html-cache')
        })
        .catch(() => {
          return caches.open(CORE_CACHE_VERSION)
            .then(cache => cache.match('/offline'))
        })
    )
  }
})

/**
 * Add a new object to the cache stack
 * @param {Object} request request from fetch event
 * @param {String} cacheName name of cache object
 * @returns repsone from request
 */
function fetchAndCache(request, cacheName) {
  return fetch(request)
    .then(response => {
      if (!response.ok) throw Error(`${request.url} not found in cache`)

      const clone = response.clone()
      caches.open(cacheName).then((cache) => {
        cache.put(request, clone)
      })
      return response
    })
}

/**
 * Check if request is a core asset element
 * @param {Object} request request from fetch event
 * @returns {Boolean} checks if requesting core asset(s)
 */
function isCoreRequest(request) {
  return request.method === 'GET' && CORE_ASSETS.includes(
    getPathname(request.url)
  )
}

/**
 * Checks if request is an HTML-request
 * @param {Object} request request from fetch event
 * @returns {Boolean}
 */
function isHTMLRequest(request) {
  const acceptHeader = request.headers.get('accept')
  return request.method === 'GET'
    && acceptHeader !== null
    && acceptHeader.indexOf('text/html') !== -1
}

/**
 * 
 * @param {Object} requestURL
 * @returns {String} relative pathname to URL
 */
function getPathname(requestURL) {
  const url = new URL(requestURL)
  return url.pathname
}