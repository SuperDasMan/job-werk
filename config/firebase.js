// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {
  getAuth,
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} = require("firebase/auth");

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = initializeApp({
  apiKey: "AIzaSyDmzaKxt0Z4oucZrXs69AmbTmcni2nx32c",
  authDomain: "job-werk.firebaseapp.com",
  projectId: "job-werk",
  storageBucket: "job-werk.appspot.com",
  messagingSenderId: "217915764541",
  appId: "1:217915764541:web:b44b206b0a815d0ec09f54",
  measurementId: "G-W32H4SL46K",
});

const auth = getAuth(firebaseConfig);
connectAuthEmulator(auth, "http://localhost:3001");

module.exports = firebaseConfig;

// Initialize Firebase
