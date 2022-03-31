const router = require("express").Router();
const {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} = require("firebase/auth");
const firebaseConfig = require("../config/firebase");
const { initializeApp } = require("firebase/app");
initializeApp(firebaseConfig);
const auth = getAuth();

// Sign Up
// router.post("/testSignUp", (req, res) => {
//   const { email, password } = req.body;
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed up
//       const user = userCredential.user;
//       res.json(user);
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       res.status(500);
//       // ..
//     });
// });

// Sign In
// router.post("/testSignIn", (req, res) => {
//   const { email, password } = req.body;
//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;
//       res.json(user);
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       res.status(500);
//       // ..
//     });
// });

// Sign Out
// router.post("/testSignOut", (req, res) => {
//   signOut(auth)
//     .then(() => {
//       // Sign-out successful.
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       res.status(500);
//     });
// });

module.exports = router;
