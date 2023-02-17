// Import the functions you need from the SDKs you need
import { initializeApp, length, getApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIq6RYuhnN8HY4O2PsoFfYuw9JICvvRog",
  authDomain: "tincheckerapp.firebaseapp.com",
  projectId: "tincheckerapp",
  storageBucket: "tincheckerapp.appspot.com",
  messagingSenderId: "488773184512",
  appId: "1:488773184512:web:b4f0d5aa9fa5684cb23ce5",
};

// Initialize Firebase

// const app = initializeApp(firebaseConfig);

let app;
if (length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

export { app };
