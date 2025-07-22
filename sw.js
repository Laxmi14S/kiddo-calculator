self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("kiddo-cache").then(cache => {
      return cache.addAll(["./", "./index.html", "./style.css", "./script.js"]);
    })
  );
});
self.addEventListener('install', e => console.log('SW installed'));
self.addEventListener('fetch', e => e.respondWith(fetch(e.request)));

});

