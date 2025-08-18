const CACHE_NAME = 'vcca-pwa-debug-v1';
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/offline.html',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/styles.css',
  '/script.js'
];

// Install: cache essential files
self.addEventListener('install', event => {
  console.log('[SW Debug] Installing service worker...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW Debug] Caching files:', FILES_TO_CACHE);
        return cache.addAll(FILES_TO_CACHE);
      })
      .catch(err => console.error('[SW Debug] Cache install failed:', err))
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', event => {
  console.log('[SW Debug] Activating service worker...');
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            console.log('[SW Debug] Deleting old cache:', key);
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// Fetch: respond from cache or network
self.addEventListener('fetch', event => {
  console.log('[SW Debug] Fetching:', event.request.url);

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          console.log('[SW Debug] Network fetch success:', event.request.url);
          return response;
        })
        .catch(err => {
          console.warn('[SW Debug] Network fetch failed, serving offline page:', err);
          return caches.match('/offline.html');
        })
    );
  } else {
    event.respondWith(
      caches.match(event.request)
        .then(cachedResponse => {
          if (cachedResponse) {
            console.log('[SW Debug] Cache hit:', event.request.url);
            return cachedResponse;
          } else {
            console.log('[SW Debug] Cache miss, fetching from network:', event.request.url);
            return fetch(event.request)
              .catch(err => {
                console.warn('[SW Debug] Network fetch failed:', err);
              });
          }
        })
    );
  }
});
