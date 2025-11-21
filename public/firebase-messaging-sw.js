importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDdZ5qUVdYOy3wlZ6jCOCPHU_j_io_PnS4",
  authDomain: "traffic-management-syste-61502.firebaseapp.com",
  projectId: "traffic-management-syste-61502",
  storageBucket: "traffic-management-syste-61502.firebasestorage.app",
  messagingSenderId: "46507850778",
  appId: "1:46507850778:web:77ec99ebf92fb4af3465a3",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("📩 Background message:", payload);

  const notificationTitle = payload.notification?.title || "إشعار جديد";
  const notificationOptions = {
    body: payload.notification?.body || "",
    icon: "/icon-192.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
