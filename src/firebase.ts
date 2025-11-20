import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// تحديد ملف الـ service worker
navigator.serviceWorker.register('/firebase-messaging-sw.js')
  .then((registration) => {
    console.log('Service Worker registered!', registration);
  })
  .catch((err) => {
    console.error('Service Worker registration failed:', err);
  });

const firebaseConfig = {
  apiKey: "AIzaSyDdZ5qUVdYOy3wlZ6jCOCPHU_j_io_PnS4",
  authDomain: "traffic-management-syste-61502.firebaseapp.com",
  projectId: "traffic-management-syste-61502",
  messagingSenderId: "46507850778",
  appId: "1:46507850778:web:77ec99ebf92fb4af3465a3",
};

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
