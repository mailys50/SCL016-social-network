// import { auth } from '/html.js';
// import { firestore } from '/html.js';
import { google } from '/html.js';
export const login = () => {
  const divLogIn = document.createElement('div');
  const viewLogIn = `
    <div class='login'>
      <div class='header'>
        <div class='logo'>
          <img src='img/logotipo.png' alt='logo'>
        </div>
        <div class='tituloRegistro'>
          <h2 class='logIn'>log In</h2>
        </div>
      </div>
      <div class='main'>
        <div class='record'> 
          <form  id='login-form'>
            <div class='formRegistro'>
              <label>Email Adress</label>
              <input type='email' name='email' class='login-email' placeholder='E-mail'>      
              <label>Enter password</label>
              <input type='password' name='contraseña' class='login-password' placeholder='password'>
              <button type='submit' id='buttonLogin' class='botonInicioSesion'>'Log In'</button>
            </div>
            <div class=' recoverPassword>
              <a href='#/recuperarContraseña'>recover password </a>
            </div>
            <div class=' recoverPassword>
            <img src='img/email.png' alt='email logo'>
            <button id='buttonGoogle2' class='botonInicioSesion'>'login with Google'</button>
            </div>           
          </form> 
        </div>
      </div>
    </div>`;
  divLogIn.innerHTML = viewLogIn;

  const buttonGoogle2= divCheckIn.querySelector('#buttonGoogle2');
  buttonGoogle2. addEventListener('click', () => {
    google();
  })
  // const buttonCheckIn= divCheckIn.querySelector('#buttonLogIn');
  // buttonCheckIn. addEventListener('click', () => {
  //   const checkInForm = document.querySelector('#checkin-form');
  //   let email = document.querySelector('.login-email').value;
  //   let password = document.querySelector('.login-password').value;
  //   auth();
    
  //   // firestore();
  // })
  

  return divLogIn;
};
