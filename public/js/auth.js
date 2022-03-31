// signing users up
const signupForm = document.getElementById("signup");
signupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = signupForm.email.value;
  const password = signupForm.password.value;

  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("user created", userCredential.user);
      signupForm.reset();
    })
    .catch((error) => {
      console.log(error.message);
    });
});
