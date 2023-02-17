import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIq6RYuhnN8HY4O2PsoFfYuw9JICvvRog",
  authDomain: "tincheckerapp.firebaseapp.com",
  projectId: "tincheckerapp",
  storageBucket: "tincheckerapp.appspot.com",
  messagingSenderId: "488773184512",
  appId: "1:488773184512:web:b4f0d5aa9fa5684cb23ce5",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
