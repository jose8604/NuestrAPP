importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey:"AIzaSy...",
  authDomain:"nuestrapp-3329a.firebaseapp.com",
  projectId:"nuestrapp-3329a",
  storageBucket:"nuestrapp-3329a.firebasestorage.app",
  messagingSenderId:"11964303180",
  appId:"1:11964303180:web:28412e809348d20d6af1e9"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload){
  const title = payload.notification && payload.notification.title
    ? payload.notification.title
    : "Nuestra App";

  const body = payload.notification && payload.notification.body
    ? payload.notification.body
    : "";

  const options = {
    body: body,
    icon: "icono.png",
    badge: "icono.png",
    data: payload.data || {}
  };

  return self.registration.showNotification(title, options);
});

self.addEventListener("notificationclick", function(event){
  event.notification.close();

  event.waitUntil(
    clients.openWindow("/")
  );
});