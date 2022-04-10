// // async function loginFormHandler(event) {
// //   event.preventDefault();

// //   const email = document.querySelector('#email-login').value.trim();
// //   const password = document.querySelector('#password-login').value.trim();

// //   if (email && password) {
// //     const response = await fetch('/api/users/login', {
// //       method: 'POST',
// //       body: JSON.stringify({
// //         email,
// //         password,
// //       }),
// //       headers: { 'Content-Type': 'application/json' },
// //     });

// //     if (response.ok) {
// //       document.location.replace('/dashboard');
// //     } else {
// //       alert(response.statusText);
// //     }
// //   }
// // }

// // async function signupFormHandler(event) {
// //   event.preventDefault();

// //   const username = document.querySelector('#username-signup').value.trim();
// //   const email = document.querySelector('#email-signup').value.trim();
// //   const password = document.querySelector('#password-signup').value.trim();

// //   if (username && email && password) {
// //     const response = await fetch('/api/users/signup', {
// //       method: 'POST',
// //       body: JSON.stringify({
// //         username,
// //         email,
// //         password,
// //       }),
// //       headers: { 'Content-Type': 'application/json' },
// //     });
// //     // check the response status
// //     if (response.ok) {
// //       console.log('success');
// //     } else {
// //       console.error(response.statusText);
// //     }
// //   }
// // }

// // document
// //   .querySelector('.login-form')
// //   .addEventListener('submit', loginFormHandler);

// // document
// //   .querySelector('.signup-form')
// //   .addEventListener('submit', signupFormHandler);

// // signing users up
// const signupFormHandler = document.querySelector(".signup");
// signupFormHandler.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const email = signupFormHandler.email.value;
//   const password = signupFormHandler.password.value;

//   fetch("/auth", {
//    method: 'POST',
//     body: JSON.stringify ({ email, password}),
//     headers: { 'Content-Type': 'application/json' },
//   })
//   .then((data) => {
//     return data.json()
//   })
//     .then((userCredential) => {
//       console.log("user created", userCredential);
//       if (userCredential) {
//         document.location.replace("/dashboard")
//       }
//       else {singupFormHandler.reset()}
//     })
//     .catch((error) => {
//       console.log(error.message);
//     });
// });

// // logging users in
// const loginFormHandler = document.querySelector(".login")
// loginFormHandler.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const email = loginFormHandler.email.value
//   const password = loginFormHandler.password.value

//   fetch("/auth/login", {
//     method: 'POST',
//      body: JSON.stringify ({ email, password}),
//      headers: { 'Content-Type': 'application/json' },
//    })
//    .then((data) => {
//      return data.json()
//    })
//    .then((userCredential) => {
//     if (userCredential) {
//       document.location.replace("/dashboard")
//     }
//     else {
//     loginFormHandler.reset()}
//   })
//   .catch((error) => {
//     console.log(error.message)
//   })
// })

// // logging users out
// const logoutButtonHandler = document.querySelector(".logout")
// logoutButtonHandler.addEventListener("click", () => {
//   fetch("/auth/logout", {
//     method: 'POST'
//   })
//   .then(() => {
//     console.log("the user signed out")
//   })
//   .catch((error) => {
//     console.log(error.message)
//   })
// })
