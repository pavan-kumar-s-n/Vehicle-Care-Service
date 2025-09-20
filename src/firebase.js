// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyDAVAtSYi6ZMO25-eGzclQcmqOV5aqnIUM",
  authDomain: "vehicle-service-app-3bb18.firebaseapp.com",
  projectId: "vehicle-service-app-3bb18",
  storageBucket: "vehicle-service-app-3bb18.firebasestorage.app",
  messagingSenderId: "1068851439393",
  appId: "1:1068851439393:web:40aca875e5baba36cd8060",
  measurementId: "G-JSDQY36ZLF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const functions = getFunctions(app);
