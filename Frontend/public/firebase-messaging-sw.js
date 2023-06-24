// // Scripts for firebase and firebase messaging
// importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
// importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// // Initialize the Firebase app in the service worker by passing the generated config
// const firebaseConfig = {
//   apiKey: "AIzaSyBDedYHGMm-0Ft58det4DvGCcqc3hYINkQ",
//   authDomain: "parlab.firebaseapp.com",
//   databaseURL: "https://parlab-default-rtdb.firebaseio.com",
//   projectId: "parlab",
//   storageBucket: "parlab.appspot.com",
//   messagingSenderId: "181469453676",
//   appId: "1:181469453676:web:cafe8f768fc298a30be749",
//   measurementId: "G-HYX7R7XKWC"
// };
// firebase.initializeApp(firebaseConfig);

// // Retrieve firebase messaging
// const messaging = firebase.messaging();

// messaging.onBackgroundMessage(function(payload) {
//   console.log('Received background message ', payload);

//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//   };

//   self.registration.showNotification(notificationTitle,
//     notificationOptions);
// });