const CACHE_NAME = 'ked-cache-v1';
const urlsToCache = [
  'KedIndex.html',
  'carrito.html',
  'diseno.css',
  'manifest.json',
  'img/logo.png',
  'img/bw-edition.png',
  'img/tshirt-white.png',
  'img/moba-hoodie.png',
  'img/only-god-tshirt.png',
  'img/bad-choices.png',
  'img/moba-studio.png',
  'img/gods-plan.png',
  'img/from-death.png'
];


// Instalar y guardar en caché los recursos
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Interceptar peticiones y servir desde caché si está disponible
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
