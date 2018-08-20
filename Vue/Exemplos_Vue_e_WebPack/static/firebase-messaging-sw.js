importScripts('https://www.gstatic.com/firebasejs/4.12.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/4.12.1/firebase-messaging.js')

let config = {
  messagingSenderId: "104909893674"
};
firebase.initializeApp(config);

const messaging = firebase.messaging()

messaging.setBackgroundMessageHandler(function (payload) {
  return self.registration.showNotification({},{})
})