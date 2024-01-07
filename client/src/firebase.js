// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-adbfd.firebaseapp.com",
  projectId: "mern-estate-adbfd",
  storageBucket: "mern-estate-adbfd.appspot.com",
  messagingSenderId: "498167579185",
  appId: "1:498167579185:web:340578f5a3e702416b8b10",
  measurementId: "G-L3LCCQS1Y9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);