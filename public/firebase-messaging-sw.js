const window = self;

importScripts('https://www.gstatic.com/firebasejs/3.4.1/firebase-app.js');
importScripts('./lib/firebase-messaging.js');

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
