const CACHE_NAME = 'rp2040-sims-v1';

// List all files needed for offline access
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './theme.css',
  './theme.js',
  './drone_sim.html',
  './pwm_visualizer.html',
  './2WD_motor.html',
  './analog_processing.html',
  './manifest.json'
];

// Install Event: Cache critical resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate Event: Clear old caches if version changes
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Fetch Event: Cache-First Strategy (Serve offline instantly)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).catch(() => {
        // Fallback for offline navigation if item isn't in cache
        return caches.match('./index.html');
      });
    })
  );
});