import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

// إعدادات Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDdZ5qUVdYOy3wlZ6jCOCPHU_j_io_PnS4",
  authDomain: "traffic-management-syste-61502.firebaseapp.com",
  projectId: "traffic-management-syste-61502",
  messagingSenderId: "46507850778",
  appId: "1:46507850778:web:77ec99ebf92fb4af3465a3",
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);

// تسجيل Service Worker أولًا
export const registerServiceWorker = async () => {
  try {
    const registration = await navigator.serviceWorker.register('/sw.js');
    console.log('Service Worker registered!', registration);
    return registration;
  } catch (err) {
    console.error('Service Worker registration failed:', err);
    return null;
  }
};

// إنشاء Messaging instance
export const messaging = getMessaging(app);
