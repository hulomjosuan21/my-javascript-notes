/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: import.meta.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDXCfTW4xCsfQHcnTamITBxeIWAHEVkfQg",
//   authDomain: "my-firebase-2104-6b131.firebaseapp.com",
//   databaseURL: "https://my-firebase-2104-6b131-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "my-firebase-2104-6b131",
//   storageBucket: "my-firebase-2104-6b131.appspot.com",
//   messagingSenderId: "194683048074",
//   appId: "1:194683048074:web:d3c60902e1915d75e59d73",
//   measurementId: "G-T9C3NBLS9Q"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app