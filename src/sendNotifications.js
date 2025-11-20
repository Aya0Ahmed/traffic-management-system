const admin = require("firebase-admin");
const serviceAccount = require("../serviceAccountKey.json"); // من Firebase

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function sendNotifications() {
  const snapshot = await db.collection("users").get();
  const tokens = snapshot.docs.map(doc => doc.data().token).filter(Boolean);

  if (tokens.length === 0) return console.log("No tokens found");

  const message = {
    notification: { title: "hey,", body: "welcome to طريقي mobile app" },
    tokens: tokens
  };

  const response = await admin.messaging().sendMulticast(message);
  console.log("Messages sent:", response.successCount);
}

sendNotifications().catch(console.error);
