// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
//import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFgkd8MygWpPlWV0z1UzXEYeAJdb-DcEo",
  authDomain: "netflix-5429e.firebaseapp.com",
  databaseURL: "https://netflix-5429e-default-rtdb.firebaseio.com",
  projectId: "netflix-5429e",
  storageBucket: "netflix-5429e.appspot.com",
  messagingSenderId: "671213057784",
  appId: "1:671213057784:web:aa2eca267a33856e99ad0d",
  measurementId: "G-EP154WYSGW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getDatabase(app);
export default db;