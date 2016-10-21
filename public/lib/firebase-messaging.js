(function() {var f=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]},g="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},h="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&
null!=global?global:this,k=function(a,b){if(b){var c=h;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&g(c,a,{configurable:!0,writable:!0,value:b})}};k("Array.prototype.findIndex",function(a){return a?a:function(a,c){a:{var b=this;b instanceof String&&(b=String(b));for(var e=b.length,l=0;l<e;l++)if(a.call(c,b[l],l,b)){a=l;break a}a=-1}return a}});
k("Object.assign",function(a){return a?a:function(a,c){for(var b=1;b<arguments.length;b++){var e=arguments[b];if(e)for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(a[l]=e[l])}return a}});
var m=this,p=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},q=function(a,b){function c(){}c.prototype=b.prototype;a.ha=b.prototype;a.prototype=new c;a.da=function(a,c,l){for(var e=Array(arguments.length-2),d=2;d<arguments.length;d++)e[d-2]=arguments[d];return b.prototype[c].apply(a,e)}};var r={c:"only-available-in-window",v:"only-available-in-sw",P:"should-be-overriden",g:"bad-sender-id",N:"permission-default",M:"permission-blocked",U:"unsupported-browser",I:"notifications-blocked",C:"failed-serviceworker-registration",h:"sw-registration-expected",F:"get-subscription-failed",H:"invalid-saved-token",l:"sw-reg-redundant",R:"token-subscribe-failed",S:"token-subscribe-no-token",$:"token-subscribe-no-push-set",V:"use-sw-before-get-token",G:"invalid-delete-token",B:"delete-token-not-found",
w:"bg-handler-function-expected",L:"no-window-client-to-msg",T:"unable-to-resubscribe",K:"no-fcm-token-for-resubscribe",D:"failed-to-delete-token"},t={},u=(t[r.c]="This method is available in a Window context.",t[r.v]="This method is available in a service worker context.",t[r.P]="This method should be overriden by extended classes.",t[r.g]="When calling firebase.initializeApp please ensure 'messagingSenderId' is set as a string value.",t[r.N]="The required permissions were not granted and dismissed instead.",
t[r.M]="The required permissions were not granted and blocked instead.",t[r.U]="This browser doesn't the API's required to use the firebase SDK.",t[r.I]="Notifications have been blocked.",t[r.C]="We are unable to register the default service worker. {$browserErrorMessage}",t[r.h]="A service worker registration was the expected input.",t[r.F]="There was an error when trying to get any existing Push Subscriptions.",t[r.H]="Unable to access details of the saved token.",t[r.l]="The service worker being used for push was made redundant.",
t[r.R]="A problem occured while subscribing the user to FCM: {$message}",t[r.S]="FCM returned no token when subscribing the user to push.",t[r.$]="FCM returned an invalid response when getting an FCM token.",t[r.V]="You must call useServiceWorker() before calling getToken() to ensure your service worker is used.",t[r.G]="You must pass in a valid token in deleteToken().",t[r.B]="The deletion attempt for token could not be performed as the token was not found.",t[r.w]="The input to setBackgroundMessageHandler() must be a function.",
t[r.L]="An attempt was made to message a non-existant window client.",t[r.T]="There was an error while resubscribing the FCM token for push messaging. {$message}",t[r.K]="Could not find an FCM token and as a result, unable to resubscribe.",t[r.D]="Unable to delete the currently saved token.",t);var w={userVisibleOnly:!0,applicationServerKey:new Uint8Array([4,51,148,247,223,161,235,177,220,3,162,94,21,113,219,72,211,46,237,237,178,52,219,183,71,58,12,143,196,204,225,111,60,140,132,223,171,182,102,62,242,12,212,139,254,227,249,118,47,20,28,99,8,106,111,45,177,26,149,176,206,55,192,156,110])};var x={m:"firebase-messaging-msg-type",A:"firebase-messaging-msg-data"},y={O:"push-msg-received",J:"notification-clicked"},z=function(a,b){var c={};return c[x.m]=a,c[x.A]=b,c};var A=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,A);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};q(A,Error);var B=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")};var C=function(a,b){b.unshift(a);A.call(this,B.apply(null,b));b.shift()};q(C,A);var E=function(a,b,c){if(!a){var d="Assertion failed";if(b)var d=d+(": "+b),e=Array.prototype.slice.call(arguments,2);throw new C(""+d,e||[]);}};var F=null;var G=function(a){a=new Uint8Array(a);var b=p(a);E("array"==b||"object"==b&&"number"==typeof a.length,"encodeByteArray takes an array as a parameter");if(!F)for(F={},b=0;65>b;b++)F[b]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(b);for(var b=F,c=[],d=0;d<a.length;d+=3){var e=a[d],l=d+1<a.length,n=l?a[d+1]:0,D=d+2<a.length,v=D?a[d+2]:0,R=e>>2,e=(e&3)<<4|n>>4,n=(n&15)<<2|v>>6,v=v&63;D||(v=64,l||(n=64));c.push(b[R],b[e],b[n],b[v])}return c.join("").replace(/\+/g,"-").replace(/\//g,
"_").replace(/=+$/,"")};var H=new firebase.INTERNAL.ErrorFactory("messaging","Messaging",u),I=function(){this.a=null},J=function(a){if(a.a)return a.a;a.a=new Promise(function(a,c){var b=m.indexedDB.open("fcm_token_details_db",1);b.onerror=function(a){c(a.target.error)};b.onsuccess=function(b){a(b.target.result)};b.onupgradeneeded=function(a){a=a.target.result.createObjectStore("fcm_token_object_Store",{keyPath:"swScope"});a.createIndex("fcmSenderId","fcmSenderId",{unique:!1});a.createIndex("fcmToken","fcmToken",{unique:!0})}});
return a.a},K=function(a){a.a?a.a.then(function(b){b.close();a.a=null}):Promise.resolve()},L=function(a,b){return J(a).then(function(a){return new Promise(function(c,e){var d=a.transaction(["fcm_token_object_Store"]).objectStore("fcm_token_object_Store").index("fcmToken").get(b);d.onerror=function(a){e(a.target.error)};d.onsuccess=function(a){c(a.target.result)}})})},M=function(a,b){return J(a).then(function(a){return new Promise(function(c,e){var d=[],n=a.transaction(["fcm_token_object_Store"]).objectStore("fcm_token_object_Store").openCursor();
n.onerror=function(a){e(a.target.error)};n.onsuccess=function(a){(a=a.target.result)?(a.value.fcmSenderId===b&&d.push(a.value),a.continue()):c(d)}})})},N=function(a){var b=a.installing||a.waiting||a.active;return new Promise(function(c,d){if("activated"===b.state)c(a);else if("redundant"===b.state)d(H.create(r.l));else{var e=function(){if("activated"===b.state)c(a);else if("redundant"===b.state)d(H.create(r.l));else return;b.removeEventListener("statechange",e)};b.addEventListener("statechange",e)}})},
O=function(a,b,c){var d=G(b.getKey("p256dh")),e=G(b.getKey("auth"));a="authorized_entity="+a+"&"+("endpoint="+b.endpoint+"&")+("encryption_key="+d+"&")+("encryption_auth="+e);c&&(a+="&pushSet="+c);c=new Headers;c.append("Content-Type","application/x-www-form-urlencoded");return fetch("https://fcm.googleapis.com/fcm/connect/subscribe",{method:"POST",headers:c,body:a}).then(function(a){return a.json()}).then(function(a){if(a.error)throw H.create(r.R,{message:a.error.message});if(!a.token)throw H.create(r.S);
a.pushSet||console.warn("PushSet was not returned by FCM meaning this subscription cannot be updated.");return{token:a.token,pushSet:a.pushSet}})},P=function(a,b,c,d,e,l){var n={swScope:c.scope,endpoint:d.endpoint,auth:G(d.getKey("auth")),p256dh:G(d.getKey("p256dh")),fcmToken:e,fcmPushSet:l,fcmSenderId:b};return J(a).then(function(a){return new Promise(function(b,c){var d=a.transaction(["fcm_token_object_Store"],"readwrite").objectStore("fcm_token_object_Store").put(n);d.onerror=function(a){c(a.target.error)};
d.onsuccess=function(){b()}})})};
I.prototype.Y=function(a,b){return b instanceof ServiceWorkerRegistration?"string"!==typeof a||0===a.length?Promise.reject(H.create(r.g)):M(this,a).then(function(c){if(0!==c.length){var d=c.findIndex(function(c){return b.scope===c.swScope&&a===c.fcmSenderId});if(-1!==d)return c[d]}}).then(function(a){if(a)return b.pushManager.getSubscription().catch(function(){throw H.create(r.F);}).then(function(b){var c;if(c=b)c=b.endpoint===a.endpoint&&G(b.getKey("auth"))===a.auth&&G(b.getKey("p256dh"))===a.p256dh;
if(c)return a.fcmToken})}):Promise.reject(H.create(r.h))};I.prototype.getSavedToken=I.prototype.Y;I.prototype.W=function(a,b){var c=this;return"string"!==typeof a||0===a.length?Promise.reject(H.create(r.g)):b instanceof ServiceWorkerRegistration?N(b).then(function(){return b.pushManager.getSubscription()}).then(function(a){return a?a:b.pushManager.subscribe(w)}).then(function(d){return O(a,d).then(function(e){return P(c,a,b,d,e.token,e.pushSet).then(function(){return e.token})})}):Promise.reject(H.create(r.h))};
I.prototype.createToken=I.prototype.W;I.prototype.i=function(a){var b=this;return"string"!==typeof a||0===a.length?Promise.reject(H.create(r.G)):L(this,a).then(function(a){if(!a)throw H.create(r.B);return J(b).then(function(b){return new Promise(function(c,d){var e=b.transaction(["fcm_token_object_Store"],"readwrite").objectStore("fcm_token_object_Store").delete(a.swScope);e.onerror=function(a){d(a.target.error)};e.onsuccess=function(b){0===b.target.result?d(H.create(r.D)):c(a)}})})})};var Q=function(a){var b=this;this.a=new firebase.INTERNAL.ErrorFactory("messaging","Messaging",u);if(!a.options.messagingSenderId||"string"!==typeof a.options.messagingSenderId)throw this.a.create(r.g);this.Z=a.options.messagingSenderId;this.f=new I;this.app=a;this.INTERNAL={};this.INTERNAL.delete=function(){return b.delete}};
Q.prototype.getToken=function(){var a=this,b=Notification.permission;return"granted"!==b?"denied"===b?Promise.reject(this.a.create(r.I)):Promise.resolve(null):this.j().then(function(b){return a.f.Y(a.Z,b).then(function(c){return c?c:a.f.W(a.Z,b)})})};Q.prototype.getToken=Q.prototype.getToken;Q.prototype.i=function(a){var b=this;return this.f.i(a).then(function(){return b.j()}).then(function(a){return a?a.pushManager.getSubscription():null}).then(function(a){if(a)return a.unsubscribe()})};
Q.prototype.deleteToken=Q.prototype.i;Q.prototype.j=function(){throw this.a.create(r.P);};Q.prototype.requestPermission=function(){throw this.a.create(r.c);};Q.prototype.u=function(){throw this.a.create(r.c);};Q.prototype.useServiceWorker=Q.prototype.u;Q.prototype.onMessage=function(){throw this.a.create(r.c);};Q.prototype.onMessage=Q.prototype.onMessage;Q.prototype.o=function(){throw this.a.create(r.c);};Q.prototype.onTokenRefresh=Q.prototype.o;Q.prototype.s=function(){throw this.a.create(r.v);};
Q.prototype.setBackgroundMessageHandler=Q.prototype.s;Q.prototype.delete=function(){K(this.f)};var S=self,W=function(a){var b=this;Q.call(this,a);this.a=new firebase.INTERNAL.ErrorFactory("messaging","Messaging",u);S.addEventListener("push",function(a){return T(b,a)},!1);S.addEventListener("pushsubscriptionchange",function(a){return U(b,a)},!1);S.addEventListener("notificationclick",function(a){return V(b,a)},!1);this.b=null};f(W,Q);
var T=function(a,b){var c;try{c=b.data.json()}catch(e){return}var d=X().then(function(b){if(b){if(c.notification||a.b)return aa(a,c)}else{if((b=c)&&"object"===typeof b.notification){var d=Object.assign({},b.notification),e={};d.data=(e.FCM_MSG=b,e);b=d}else b=void 0;if(b)return S.registration.showNotification(b.title||"",b);if(a.b)return a.b(c)}});b.waitUntil(d)},U=function(a,b){var c=a.getToken().then(function(b){if(!b)throw a.a.create(r.K);var c=a.f;return L(c,b).then(function(b){if(!b)throw a.a.create(r.H);
return S.registration.pushManager.subscribe(w).then(function(a){return O(b.fa,a,b.ea)}).catch(function(d){return c.i(b.ga).then(function(){throw a.a.create(r.T,{message:d});})})})});b.waitUntil(c)},V=function(a,b){if(b.notification&&b.notification.data&&b.notification.data.FCM_MSG){b.stopImmediatePropagation();b.notification.close();var c=b.notification.data.FCM_MSG,d=c.notification.click_action;if(d){var e=ba(d).then(function(a){return a?a:S.clients.openWindow(d)}).then(function(b){if(b)return delete c.notification,
Y(a,b,z(y.J,c))});b.waitUntil(e)}}};W.prototype.s=function(a){if(a&&"function"!==typeof a)throw this.a.create(r.w);this.b=a};W.prototype.setBackgroundMessageHandler=W.prototype.s;
var ba=function(a){var b=(new URL(a)).href;return S.clients.matchAll({type:"window",includeUncontrolled:!0}).then(function(a){for(var c=null,e=0;e<a.length;e++)if((new URL(a[e].url)).href===b){c=a[e];break}if(c)return c.focus(),c})},Y=function(a,b,c){return new Promise(function(d,e){if(!b)return e(a.a.create(r.L));b.postMessage(c);d()})},X=function(){return S.clients.matchAll({type:"window",includeUncontrolled:!0}).then(function(a){return a.some(function(a){return"visible"===a.visibilityState})})},
aa=function(a,b){return S.clients.matchAll({type:"window",includeUncontrolled:!0}).then(function(c){var d=z(y.O,b);return Promise.all(c.map(function(b){return Y(a,b,d)}))})};W.prototype.j=function(){return Promise.resolve(S.registration)};var Z=function(a){var b=this;Q.call(this,a);this.X=null;this.aa=firebase.INTERNAL.createSubscribe(function(a){b.X=a});this.ca=null;this.ba=firebase.INTERNAL.createSubscribe(function(a){b.ca=a});ca(this)};f(Z,Q);Z.prototype.getToken=function(){return"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")?Q.prototype.getToken.call(this):Promise.reject(this.a.create(r.U))};
Z.prototype.getToken=Z.prototype.getToken;Z.prototype.requestPermission=function(){var a=this;return"granted"===Notification.permission?Promise.resolve():new Promise(function(b,c){var d=function(d){return"granted"===d?b():"denied"===d?c(a.a.create(r.M)):c(a.a.create(r.N))},e=Notification.requestPermission(function(a){e||d(a)});e&&e.then(d)})};Z.prototype.requestPermission=Z.prototype.requestPermission;
Z.prototype.u=function(a){if(!(a instanceof ServiceWorkerRegistration))throw this.a.create(r.h);if("undefined"!==typeof this.b)throw this.a.create(r.V);this.b=a};Z.prototype.useServiceWorker=Z.prototype.u;Z.prototype.onMessage=function(a,b,c){return this.aa(a,b,c)};Z.prototype.onMessage=Z.prototype.onMessage;Z.prototype.o=function(a,b,c){return this.ba(a,b,c)};Z.prototype.onTokenRefresh=Z.prototype.o;
Z.prototype.j=function(){var a=this;if(this.b)return Promise.resolve(this.b);this.b=null;return navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"firebase-cloud-messaging-push-scope"}).then(function(b){a.b=b;b.update();return b}).catch(function(b){throw a.a.create(r.C,{browserErrorMessage:b.message});})};
var ca=function(a){"serviceWorker"in navigator&&navigator.serviceWorker.addEventListener("message",function(b){if(b.data&&b.data[x.m])switch(b=b.data,b[x.m]){case y.O:case y.J:a.X.next(b[x.A])}},!1)};if(!(firebase&&firebase.INTERNAL&&firebase.INTERNAL.registerService))throw Error("Cannot install Firebase Messaging - be sure to load firebase-app.js first.");firebase.INTERNAL.registerService("messaging",function(a){return self&&"ServiceWorkerGlobalScope"in self?new W(a):new Z(a)},{Messaging:Z});})();
