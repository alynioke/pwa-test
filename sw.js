self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('alinasweb').then(function(cache) {
      return cache.addAll(
        [
          '/',
          '/styles.css',
          '/index.html'
        ]
      );
    })
  );
});
