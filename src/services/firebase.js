import firebase from "firebase/compat";
import { initializeApp } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";
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

const AuthProvider = {
  async login(email, password) {
    try {
      const userCredential = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      const { password: userPassword, email: userEmail } = userCredential.user;
      await AsyncStorage.setItem("userPassword", password);
      await AsyncStorage.setItem("userEmail", userEmail);
      return true;
    } catch (error) {
      console.error("Error logging in:", error);
      return false;
    }
  },

  async autoLogin() {
    try {
      const userPassword = await AsyncStorage.getItem("userPassword");
      const userEmail = await AsyncStorage.getItem("userEmail");
      if (userPassword && userEmail) {
        const userCredential = await firebase
          .auth()
          .signInWithEmailAndPassword(userEmail, userPassword);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error auto-logging in:", error);
      return false;
    }
  },

  async logout() {
    try {
      await firebase.auth().signOut();
      await AsyncStorage.removeItem("userPassword");
      await AsyncStorage.removeItem("userEmail");
      return true;
    } catch (error) {
      console.error("Error logging out:", error);
      return false;
    }
  },
};

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

module.exports = {
  auth,
  db,
  storage,
  AuthProvider,
};
