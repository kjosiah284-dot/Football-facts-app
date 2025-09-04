self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("football-facts").then(cache => {
      return cache.addAll(urlsToCache);[
        "./",
        "./index.html",
        "./style.css",
        "./script.js",
        "./manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
