import firebase from "firebase/compat";
import { initializeApp } from "firebase/app";
import "firebase/compat/storage";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjXWJqbYFn5d41Bqbm9mtnM4VaM9aoI08",
  authDomain: "kokkei-plus.firebaseapp.com",
  projectId: "kokkei-plus",
  storageBucket: "kokkei-plus.appspot.com",
  messagingSenderId: "619280483616",
  appId: "1:619280483616:web:f1017f481b8e580d8c8345",
  measurementId: "G-90Z3ENMBCQ",
};

let app;
if (firebase.apps.length === 0) {
  console.log("Initializing Firebase");
  app = firebase.initializeApp(firebaseConfig);
} else {
  console.log("Reusing existing Firebase app");
  app = firebase.app();
}

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

module.exports = {
  auth,
  db,
  storage,
};
