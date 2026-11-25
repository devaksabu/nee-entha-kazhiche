const CACHE_NAME = 'nee-entha-kazhiche-v1';
const ASSETS_TO_CACHE = [
  '/nee-entha-kazhiche/',
  '/nee-entha-kazhiche/index.html',
  '/nee-entha-kazhiche/manifest.json',
  '/nee-entha-kazhiche/icons/icon-192.png',
  '/nee-entha-kazhiche/icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Always go to network for Google Apps Script API calls or non-GET requests
  if (
    event.request.method !== 'GET' ||
    event.request.url.includes('script.google.com')
  ) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
