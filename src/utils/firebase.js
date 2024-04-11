// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCNEeH5tcHIHrnqt8PeJgx6PreUYIU3O8",
  authDomain: "netflixgpt-24129.firebaseapp.com",
  projectId: "netflixgpt-24129",
  storageBucket: "netflixgpt-24129.appspot.com",
  messagingSenderId: "935263255435",
  appId: "1:935263255435:web:8034006a7aadc7f2dacd8e",
  measurementId: "G-YDRTXNQG3D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();