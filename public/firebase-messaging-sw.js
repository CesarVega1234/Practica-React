importScripts('https://www.gstatic.com/firebasejs/7.8.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.8.0/firebase-messaging.js');

const config = {
  apiKey: "AIzaSyAso2dNjAPeU5rkD6tAQcsj7ItkW8myG6E",
  authDomain: "dannunzio-stock.firebaseapp.com",
  databaseURL: "https://dannunzio-stock.firebaseio.com",
  projectId: "dannunzio-stock",
  storageBucket: "dannunzio-stock.appspot.com",
  messagingSenderId:"BN_JN9Kuu-Fm5Qp4Q6mpEz0eXKQom-hallyjcmYu2s8zrXOrEFtzHCM4r_PhME65VfbB46oYee1J-sVLVoS7EXg",
  appId: "1:433759315574:web:cba58c9a8a2b625f45a157",
  measurementId: "G-87BQYDSELK"
};

firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const title = payload.data.title;
  const options = {
    body: payload.data.score
  };

  return self.registration.showNotification(title,options);
});