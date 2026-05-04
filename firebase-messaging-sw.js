importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "TU_API_KEY",
  authDomain: "nuestrapp-3329a.firebaseapp.com",
  projectId: "nuestrapp-3329a",
  messagingSenderId: "11964303180",
  appId: "TU_APP_ID"
});

const messaging = firebase.messaging();