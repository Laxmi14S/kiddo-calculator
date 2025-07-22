self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("kiddo-cache").then((cache) => {
      return cache.addAll([
        "/kiddo-calculator/",
        "/kiddo-calculator/index.html",
        "/kiddo-calculator/style.css",
        "/kiddo-calculator/script.js",
      ]);
    }).catch((err) => {
      console.error("Cache error:", err);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
