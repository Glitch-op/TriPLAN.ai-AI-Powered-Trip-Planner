// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// import { i } from "vite/dist/node/types.d-aGj9QkWt";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "FIREBASE_API_KEY",
  authDomain: "FIREBASE_PROJECT_ID.firebaseapp.com",
  projectId: "FIREBASE_PROJECT_ID",
  storageBucket: "FIREBASE_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "FIREBASE_SENDER_ID",
  appId: "FIREBASE_API_ID",
  measurementId: "FIREBASE_MEASUREMENT_ID"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
