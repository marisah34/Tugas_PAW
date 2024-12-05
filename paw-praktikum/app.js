// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', function() {
//       console.log('Attempting to register Service Worker');
//       navigator.serviceWorker.register('/sw.js').then(function(registration) {
//         console.log('Service Worker registered with scope:', registration.scope);
//       }).catch(function(error) {
//         console.error('Service Worker registration failed:', error);
//       });
//     });
//   }
//   if ('Notification' in window && navigator.serviceWorker) {
//     Notification.requestPermission(status => {
//       console.log('Notification permission status:', status);
//     });
//   }

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker registered:', registration);
          
          // Kirim notifikasi push sederhana
          if (Notification.permission === 'granted') {
            registration.showNotification('Welcome to My PWA', {
              body: 'Thank you for visiting our PWA!',
              icon: '/images/icons/icon-192x192.jpg'
            });
          }
        })
        .catch(err => {
          console.error('Service Worker registration failed:', err);
        });
    });
  }
  
  