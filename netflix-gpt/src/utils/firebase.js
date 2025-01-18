// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1wMCQXhMNbbVqyJYle9G_MX_Y3dRqj-g",
  authDomain: "netflixgpt-fd628.firebaseapp.com",
  projectId: "netflixgpt-fd628",
  storageBucket: "netflixgpt-fd628.firebasestorage.app",
  messagingSenderId: "721589545235",
  appId: "1:721589545235:web:9958127b3610fb0d2692e6",
  measurementId: "G-CMNEXQYMNK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
export const auth = getAuth();
