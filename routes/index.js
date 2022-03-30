const router = require("express").Router();
const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");
// const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");
const firebaseConfig = require("../config/firebase");
const { initializeApp } = require("firebase/app");
const app = initializeApp(firebaseConfig);
const auth = getAuth();

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

// signing users up
const signupForm = document.querySelector("signup");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = signupForm.email.value;
  const password = signupForm.passowrd.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("user created", userCredential.user);
      signupForm.reset();
    })
    .catch((error) => {
      console.log(error.message);
    });
});

module.exports = router;
