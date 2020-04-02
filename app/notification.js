// import messaging from '@react-native-firebase/messaging';
// import { firebase } from '@react-native-firebase/messaging';
// import React, { useEffect } from 'react';

// async function registerAppWithFCM() {
//     await messaging().registerForRemoteNotifications();
    
//   }
//   async function requestPermission() {
//     const granted = messaging().requestPermission();
   
//     if (granted) {
//       console.log('User granted messaging permissions!');
//     } else {
//       console.log('User declined messaging permissions :(');
//     }
//   }

//  export default function notification() {
//     useEffect(() => {
//       const unsubscribe = messaging().onMessage(async remoteMessage => {
//         console.log('FCM Message Data:', remoteMessage.data);
   
//         // Update a users messages list using AsyncStorage
//         const currentMessages = await AsyncStorage.getItem('messages');
//         const messageArray = JSON.parse(currentMessages);
//         messageArray.push(remoteMessage.data);
//         await AsyncStorage.setItem('messages', JSON.stringify(messageArray));
//       });
//     }, []);
//   }

