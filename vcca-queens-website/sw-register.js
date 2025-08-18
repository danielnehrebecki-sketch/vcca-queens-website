// sw-register.js
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg => console.log('[PWA] Service Worker registered:', reg))
      .catch(err => console.error('[PWA] Service Worker registration failed:', err));
  });
}
