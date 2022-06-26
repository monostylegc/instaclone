// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeereTSIf_6EkGBRL1qmhBY0TmPi6KZIE",
  authDomain: "instagram-fbac6.firebaseapp.com",
  projectId: "instagram-fbac6",
  storageBucket: "instagram-fbac6.appspot.com",
  messagingSenderId: "223182652503",
  appId: "1:223182652503:web:9478a7e8fb12f24bbf8f12",
  measurementId: "G-5SJ37NEVFJ"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
//const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app)

export { app, db, storage }