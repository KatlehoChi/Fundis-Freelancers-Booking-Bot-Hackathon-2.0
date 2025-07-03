// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAw6hThpO-fr0XkVrJS4SiVAhq-UXH6hVE",
  authDomain: "fundiconnect-e05f4.firebaseapp.com",
  projectId: "fundiconnect-e05f4",
  storageBucket: "fundiconnect-e05f4.firebasestorage.app",
  messagingSenderId: "51628380671",
  appId: "1:51628380671:web:52243de49b0dc34e6217ca",
  measurementId: "G-QT1V825FLT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);