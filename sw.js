// Minimal service worker for Experiment Log.
// Its only job is installability (a fetch handler is required for
// "Install app") — all requests pass straight through to the network,
// so nothing is ever served stale from a cache.
self.addEventListener('install', function () {
  self.skipWaiting();
});
self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', function (event) {
  event.respondWith(fetch(event.request));
});
