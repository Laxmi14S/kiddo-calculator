self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('kiddo-calculator-cache').then(function (cache) {
      return cache.addAll([
        '/',
        '/kiddo-calculator/',
        '/kiddo-calculator/index.html',
        '/kiddo-calculator/style.css',
        '/kiddo-calculator/script.js',
        '/kiddo-calculator/icons/icon-192.png',
        '/kiddo-calculator/icons/icon-512.png',
        '/kiddo-calculator/manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
