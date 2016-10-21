function ab2str(buf) {
  return String.fromCharCode.apply(null, new Uint16Array(buf));
}

navigator.serviceWorker.ready.then(function(reg) {
  reg.pushManager.getSubscription().then(function(subscription) {

    if (!subscription) {
      reg.pushManager.subscribe({
        userVisibleOnly: true
      }).then(function(subscription) {
        onCaughtSubscription(subscription);
      });
    } else {
      onCaughtSubscription(subscription);
    }
  });
});


function onCaughtSubscription(subscription) {
  var endpoint = subscription.endpoint;

  // both return a ArrayBuffer
  var key = subscription.getKey('p256dh');
  var auth = subscription.getKey("auth");

  const clientPublicKey = new Buffer(subscription.keys.p256dh, 'base64');
  const clientAuthSecret = new Buffer(subscription.keys.auth, 'base64');


  var json = subscription.toJSON();

  console.log(json);
  console.log(endpoint);
  // subscription.unsubscribe().then(function(successful) {
  // }).catch(function(e) {
  // });
}


navigator.serviceWorker.ready.then(function(reg) {
  console.dir(reg);
  reg.pushManager.subscribe({
    userVisibleOnly: true
  }).then(function(subscription) {
    var endpoint = subscription.endpoint;

    // both return a ArrayBuffer
    var key = subscription.getKey('p256dh');
    var auth = subscription.getKey("auth");

    var json = subscription.toJSON();

    console.log(json);
    console.log(endpoint);
  });
});
navigator.serviceWorker.ready.then(function(reg) {
  reg.pushManager.getSubscription().then(function(subscription) {

    if (subscription) {
      var endpoint = subscription.endpoint;

      // both return a ArrayBuffer
      var key = subscription.getKey('p256dh');
      var auth = subscription.getKey("auth");

      var json = subscription.toJSON();

      console.log(json);
      console.log(endpoint);
    }
  });
});
