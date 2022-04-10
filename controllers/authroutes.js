const router = require('express').Router();
const {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} = require('firebase/auth');
const firebaseConfig = require('../config/firebase');
const { initializeApp } = require('firebase/app');
initializeApp(firebaseConfig);
const auth = getAuth();
const withAuth = require('../utils/auth');

// Sign Up
router.post('/signup', (req, res) => {
  const { email, password } = req.body;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
      });
      const user = userCredential.user;
      res.json(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      res.status(500);
      // ..
    });
});

// Sign In
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
      });
      const user = userCredential.user;
      res.json(user);
    })
    .catch((error) => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      res.status(500);
      // ..
    });
});

// Sign Out
router.post('/logout', withAuth, (req, res) => {
  signOut(auth)
    .then(() => {
      req.session.save(() => {
        req.session.loggedIn = false;
        // Sign-out successful.
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      res.status(500);
    });
});

module.exports = router;
