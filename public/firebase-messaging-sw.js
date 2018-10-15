importScripts('https://www.gstatic.com/firebasejs/5.5.4/firebase-app.js');

// log notification click action
// your notificationclick hanlder must before importScripts firebase-messaging.js
self.addEventListener("notificationclick", function(event) {
  var n = event.notification;
  var data = n ? event.notification.data : {};
  var FCM_MSG = data.FCM_MSG || {};
  var click_action = FCM_MSG.notification && FCM_MSG.notification.click_action ? FCM_MSG.notification.click_action : "";
  log({
    type: "notificationclick",
    t: n ? n.timestamp : +new Date,
    ca: click_action
  })
});
importScripts('https://www.gstatic.com/firebasejs/5.5.4/firebase-messaging.js');

firebase.initializeApp({
  messagingSenderId: "968602708301"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(data => {
  console.log("received background message " + data);
  // Show notification here
  const notificationTitle = data.notification.title;
  const notificationOptions = {
    body: "Msg Body",
    icon: 'https://m.aliexpress.com/img/android-chrome-192x192.png',
    click_action: "//m.aliexpress.com"
  };
  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});

// log arrival of notification
self.addEventListener("push", function(event) {
  try {
    var json = event.data.json() || {};
    var notification = json.notification || {};
    var click_action = notification.click_action || "";
    log({
      type: "push",
      t: +new Date,
      ca: click_action
    })
  } catch (e) {}
});

function log() {
  // do someting
}
