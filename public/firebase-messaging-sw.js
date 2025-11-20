import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDdZ5qUVdYOy3wlZ6jCOCPHU_j_io_PnS4",
  authDomain: "traffic-management-syste-61502.firebaseapp.com",
  projectId: "traffic-management-syste-61502",
  storageBucket: "traffic-management-syste-61502.firebasestorage.app",
  messagingSenderId: "46507850778",
  appId: "1:46507850778:web:77ec99ebf92fb4af3465a3",
  measurementId: "G-2NWCJ00KPT"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const messaging = getMessaging(app);

// تسجيل الإشعارات
export async function registerForNotifications(userId) {
  try {
    const currentToken = await getToken(messaging, {
      vapidKey: "BKgVfGm2DlHqsa32LgTjutDCfifmC0YMAw6lmggq6Ry1qMuehVVql2qhUE_Z0hdFRbfc0ePof3LDIRyQQ9WAKww"
    });
    if (currentToken) {
      console.log("Token:", currentToken);
      await setDoc(doc(db, "users", userId), { token: currentToken }, { merge: true });
    } else {
      console.log("User hasn't allowed notifications");
    }
  } catch (err) {
    console.log("Error getting token:", err);
  }
}

// استقبال الرسائل أثناء فتح الصفحة
onMessage(messaging, (payload) => {
  console.log("Message received: ", payload);
  alert(payload.notification?.title + "\n" + payload.notification?.body);
});
