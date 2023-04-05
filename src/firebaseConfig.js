import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB-5guvNJO-6JfTxDaI-Am9p1TKRLAJGzo",
  authDomain: "vue-auth-ab790.firebaseapp.com",
  projectId: "vue-auth-ab790",
  storageBucket: "vue-auth-ab790.appspot.com",
  messagingSenderId: "74520868147",
  appId: "1:74520868147:web:cf01fbe291bb119e7f3a46",
  measurementId: "G-T1TM37FP9L",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize firebase auth
const auth = getAuth();
const db = getFirestore(app);
// const db = app.firestore();
export { app, auth, db };
