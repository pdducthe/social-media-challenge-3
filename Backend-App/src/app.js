const express = require("express");
const app = express();
const config = require("./config");
const { getDatabase, ref, onValue, set } = require("firebase/database");
const { initializeApp } = require("firebase/app");
const {getAuth, onAuthStateChanged } = require("firebase/auth");
const {getFirestore, collection, getDocs} = require("firebase/firestore");

const firebaseConfig = {
  apiKey: config.firebaseApiKey,
  authDomain: config.firebaseAuthDomain,
  projectId: config.firebaseProjectId,
  storageBucket: config.firebaseStorageBucket,
  messagingSenderId: config.firebaseMessSendId,
  appId: config.firebaseAppId,
  measurementId: config.firebaseMeasurementId,
  databaseURL: "https://(default).firebaseio.com",
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

// // Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, 'a');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   console.log("cityList", cityList)
//   return cityList;
// }
// getCities(db);

app.listen(5555, () => {
  console.log("Server is running on port 5555");
});

const rootRoute = require("./routes");
app.use("/api", rootRoute);
