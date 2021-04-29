 import { auth } from '/html.js';
// import { firestore } from '/html.js';
import { google } from '/html.js';
export const checkin = () => {
    const divCheckIn = document.createElement('div');   
    const viewCheckIn =  
    `
    <div class='checkin'>
      <div class='header'>
        <div class='logo'>
          <img src='img/logotipo.png' alt='logo'>
        </div>
        <div class='tituloRegistro'>
          <h2 class='User register'>User register</h2>
        </div>
      </div>
      <div class='main'>
        <div class='record'> 
          <form  id='checkin-form'>
            <div class='formRegistro'>
              <label>Email Adress</label>
              <input type='email' name='email' class='checkin-email placeholder='E-mail'>      
              <label>Enter password</label>
              <input type='password' name='contraseña' class='checkin-password' paceholder='password'>
               <button type='submit' id='buttonCheckIn' class='buttonCheckIn'>'Check In'</button>
            </div>            
            <div class=' recoverPassword>
            <img src='img/email.png' alt='email logo'>
             <button id='buttonGoogle' class='buttonGoogle'>'checkin with Google'</button>
            </div>           
          </form> 
        </div>
      </div>
    </div>`;
  divCheckIn.innerHTML=viewCheckIn;

    const buttonGoogle= divCheckIn.querySelector('#buttonGoogle');
    buttonGoogle. addEventListener('click', () => {
      google();
    })
    const buttonCheckIn= divCheckIn.querySelector('#buttonCheckIn');
     buttonCheckIn. addEventListener('click', () => {
     const checkInForm = document.querySelector('#checkin-form');
     let email = document.querySelector('.checkin-email').value;
     let password = document.querySelector('.checkin-password').value;
      auth();
      
     // firestore();
     })
    

    return divCheckIn;
}