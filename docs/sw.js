// Incrementing OFFLINE_VERSION will kick off the install event and force
// previously cached resources to be updated from the network.
// This variable is intentionally declared and unused.
// eslint-disable-next-line no-unused-vars
const OFFLINE_VERSION = 1
const CACHE_NAME = 'pwa-assets'
const CACHE_URL_LIST = [
  './index.html',
  './css/simple.min.css',
  './css/style.css',
  './js/compiled/main.js',
]

self.addEventListener('install', (e) => {
  console.log('кэшируем ассеты...')
  e.waitUntil(
    caches.open(CACHE_NAME)
          .then(cache => {
            console.log(cache, CACHE_URL_LIST)
            return cache.addAll(CACHE_URL_LIST)
          })
  )
})


self.addEventListener('fetch', (e) => {
  console.log('фетчируем нечто: ', e, caches.match(e.request))
  e.respondWith(caches.match(e.request).then(response => response || fetch(e.request)))
})
