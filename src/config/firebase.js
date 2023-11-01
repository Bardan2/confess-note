// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getDatabase, set, ref, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC1hJxBW4y6b8GvLAF2q0IQsNaQtcZvLr0",
  authDomain: "confess-note-5d8e1.firebaseapp.com",
  databaseURL:
    "https://confess-note-5d8e1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "confess-note-5d8e1",
  storageBucket: "confess-note-5d8e1.appspot.com",
  messagingSenderId: "952542941442",
  appId: "1:952542941442:web:7213df243d19e613c2b21b",
  measurementId: "G-N6NH1DCR6Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export { database, set, ref, onValue };
