const admin = require("firebase-admin");
const serviceAccount = require("./urbanity-cti-firebase-adminsdk-fbsvc-4a6c45a9ce.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://urbanity-cti-default-rtdb.firebaseio.com",
  });
}

const db = admin.firestore();

module.exports = { admin, db };