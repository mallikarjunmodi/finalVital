// import {response, Router} from "express";
// import admin from 'firebase-admin';
// import serviceAccount from '../firebase/serviceAccountKey.json' assert { type: "json" };

// // import serviceAccount from '../firebase/serviceAccountKey.json';

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: 'https://parlab-default-rtdb.firebaseio.com/',
// });

// const database = admin.database();

// const NotificationRoutes = Router();


// NotificationRoutes.post('/token', async(req, res) =>
// {
//    console.log("here11");
//    console.log("btSensor req",req.body);
//    try{
//       const userId = req.body.userId;
//       const token = req.body.token ;
//       const userTokenRef = database.ref(`tokens/${userId}`);
//       const userTokenSnapshot = await userTokenRef.once('value');
//       const userToken = userTokenSnapshot.val();
//       if (userToken !== token) {
//          userTokenRef.set(token);
//          console.log("userToken saved")
//       }

//    }
//    catch(err)
//    {
//       console.error(err);
//       res.status(500).send('Error saving token to database');
//    }
// })

// NotificationRoutes.post('/data', async(req, res) =>
// {
//    console.log("here22");
//    try{
//      console.log("btSensor req",req.body);
//      const userId="d001"
//      const userTokenRef = database.ref(`tokens/${userId}`);
//      const userTokenSnapshot = await userTokenRef.once('value');
//      const userToken = userTokenSnapshot.val();
//      console.log("userToken",userToken);
//      const message = {
//       notification: {
//         title: 'New Message',
//         body: 'You have a new message from a friend.'
//       },
//       token: userToken
//     };
//     // Send the notification to the device
// admin.messaging().send(message)
// .then(response => {
//   console.log('Notification sent:', response);
// })
// .catch(error => {
//   console.error('Error sending notification:', error);
// });

// //      const doctorRef = admin.database().ref('doctors/d001');
// //      doctorRef.once('value', snapshot => {
// //       const doctor = snapshot.val();
// //       const token = doctor.token;
// //         // Send a notification to the doctor
// //   const message = {
// //     notification: {
// //       title: 'New Patient',
// //       body: 'You have a new patient waiting for you.'
// //     },
// //     token: token
// //   };
// //   admin.messaging().send(message)
// //     .then(response => {
// //       console.log('Notification sent:', response);
// //     })
// //     .catch(error => {
// //       console.error('Error sending notification:', error);
// //     });
// // });

      
//       }

   
//    catch(err)
//    {
//       console.error(err);
//       res.status(500).send('Error saving token to database');
//    }
// })


// export default NotificationRoutes;