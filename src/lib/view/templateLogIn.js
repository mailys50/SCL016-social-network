import { signIn, google, observer, signOut } from "../index.js";
export const login = () => {
  const divLogIn = document.createElement("div");
  const viewLogIn = `
  <div class='loginContainer'>
    <div class='header'>
      <div class='logo'>
        <img src='img/palmerita.png' class='logotipo'alt='logo'>
      </div>
      <div class='title'>
         <h1>ourist places</h1>
      </div>
    </div>
    <div class='tituloRegistro'>
      <h2 class='Log In'>User register</h2>
    </div>
    <div class='contLogIn'>
      <div  class='formLogIn'>
        <label class='adress'>Email Adress</label>
           <input
           type='email'
           name='email'
           class='login-email'
           placeholder='E-mail'
        />
        <label class='password'>Enter password</label>
        <input
           type='password'
           name='password'
           class='login-password'
           placeholder='password'
        />
      </div>
      <div class='logIn'>  
        <button id='buttonLogIn' class='buttonLogIn'>LogIn</button>
      </div>
    </div>
    <div class='message'>      
    </div>
    <div class='recoverPassword'>
      <a href='#/recoverPassword' class='recoverPassword'>recover password</a>
    </div>
    <div class='close' id='close'>
      <button id='signOff' class='buttonSignOff'>Sign off</button>
    </div>
    <div class='google'>
      <button id='buttonGoogle2' class='buttonGoogle2'>
        login with Google
      </button>
    </div>
  </div>`;
  divLogIn.innerHTML = viewLogIn;
  // google
  const buttonGoogle2 = divLogIn.querySelector("#buttonGoogle2");
  buttonGoogle2.addEventListener("click", () => {
    google();
    location.href = "#/start";
  });
  // inicio de sesión
  const buttonLogIn = divLogIn.querySelector("#buttonLogIn");
  buttonLogIn.addEventListener("click", () => {
    console.log("escucho cick");
    let email2 = document.querySelector(".login-email");
    let password2 = document.querySelector(".login-password");
    email2 = email2.value;
    password2 = password2.value;
    signIn(email2, password2);
    location.href = "#/start";
  });
  // mensaje usuario regietrado
  const message = () => {
    const messageInvalid = divLogIn.querySelector(".message");
    messageInvalid.innerHTML = "invalid email or password";

    observer(message);
  };

  // cerrar sesion

  const closeRecover = () => {
    const buttonSignOff = divLogIn.querySelector("#signOff");
    buttonSignOff.addEventListener("click", () => {
      signOut();
    });
    closeRecover();
  };

  return divLogIn;
};
