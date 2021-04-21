// aqui exportaras las funciones que necesites

export const myFunction = () => {
// registro de Usuario
const signUpForm = document.querySelector("#signup-form");

signUpForm.addEventListener("submit", (e) =>{
  e.preventDefault();
  const email = document.querySelector("#signup-email").value;
  const password = document.querySelector("#signup-password").value;
  console.log(email+password);
  
  auth
  .createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // clear the form
    signUpForm.reset();
})

})


// Iniciar secion
const signInForm = document.querySelector("#login-form");

signInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector(".login-email").value;
  const password = document.querySelector(".login-password").value;

  // Autenticar usurio
  auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
    // resetear formulario
    signInForm.reset();
console.log("login");
  })
})

  console.log('Hola mundo!');
};