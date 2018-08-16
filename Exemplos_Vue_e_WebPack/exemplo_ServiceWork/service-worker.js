let cacheName = "conhecendo-service-workes";
let filesToCache = [
    "/",
    "index.html",
    "style.css"
]
self.addEventListener('install', function (e) {
    console.log('[serviceWorker] instalado')
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log("cache carregado")
            return cache.addAll(filesToCache)
        })
    )
})
self.addEventListener('active', function (e) {
    console.log('[serviceWorker] ativado')
})

self.addEventListener('fetch', function (e) {
    console.log('[serviceWorker] executar', e.request.url)
    e.respondWith(
        caches.match(e.request).then(function (response) {
            console.log('[serviceWorker] caches executar', e.request.url)
            return response || fetch(e.request)
        })
    )
})