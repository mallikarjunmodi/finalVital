
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getMessaging, getToken, onMessage } from "firebase/messaging";

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

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // console.log("app",app);
// export default app;

// export const messaging = getMessaging(app);
// // export const messaging = firebase.messaging();

// const analytics = getAnalytics(app);
// export const getTokenAsync = () => {
//   return new Promise((resolve, reject) => {
//     getToken(messaging, { vapidKey: "BL6NbTX98IKGnTdClp7BS5Cw4eUF-Wm1ow5rGsORhT1FSYqdOMUot-DLqFiB7UcIJlDkFnP69V0b6pjYkdkgkUw" })
//       .then((currentToken) => {
//         if (currentToken) {
//           // console.log('Current token for client:', currentToken);
//           resolve(currentToken);
//         } else {
//           console.log('No registration token available. Request permission to generate one.');
//           reject(new Error('No registration token available'));
//         }
//       })
//       .catch((err) => {
//         console.log('An error occurred while retrieving token:', err);
//         reject(err);
//       });
//   });
// };



