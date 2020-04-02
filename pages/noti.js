// import PushNotificationIOS from 'react-native';
// import PubNubReact from 'pubnub-react';
// import React, { Component } from 'react';
// var PushNotification = require('react-native-push-notification');
// class noti extends Component{
// constructor(props) {
// super(props);
// this.pubnub = new PubNubReact({
// publishKey: 'pub-c-ce642c0f-799a-4d50-82c9-03e098db73ef',
// subscribeKey: 'sub-c-8ec7082e-58b6-11ea-9a59-eab2515ceb0d'
//         });
// this.pubnub.init(this);
// PushNotification.configure({
//           // Called when Token is generated.
// onRegister: function(token) {
// console.log( 'TOKEN:', token );
// if (token.os == "ios") {
// this.pubnub.push.addChannels(
// {
// channels: ['notifications'],
// device: token.token,
// pushGateway: 'apns'
//      });
//      // Send iOS Notification from debug console: {"pn_apns":{"aps":{"alert":"Hello World."}}}
// } 
// else if (token.os == "android"){
//  this.pubnub.push.addChannels(
//          {
//  channels: ['notifications'],
// device: token.token,
// pushGateway: 'gcm' // apns, gcm, mpns
// });
//     // Send Android Notification from debug console: {"pn_gcm":{"data":{"message":"Hello World."}}}
//               }  
//  }.bind(this),
// // Something not working?
// // See: https://support.pubnub.com/support/solutions/articles/14000043605-how-can-i-troubleshoot-my-push-notification-issues-
//  // Called when a remote or local notification is opened or received.
// onNotification: function(notification) {
// console.log( 'NOTIFICATION:', notification );
// // Do something with the notification.
// // Required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
// // notification.finish(PushNotificationIOS.FetchResult.NoData);
// },
//           // ANDROID: GCM or FCM Sender ID
//         senderID: "971311606045",
//       });
//     }
// }

// export default noti;