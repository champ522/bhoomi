// Service Worker for Bhoomi Techzone
// Improves performance and enables offline functionality

const CACHE_NAME = 'bhoomi-techzone-v1';
const urlsToCache = [
  '/',
  '/assets/',
  '/images/bhoomi-black.png',
  '/images/girlimg.png',
  'https://fonts.googleapis.com/css?family=Arimo:400,700|Cabin:400,500,600,700|Montserrat:300,400,500,600,700,800,900&display=swap',
  'https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap'
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});