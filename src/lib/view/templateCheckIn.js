import { register, google } from '../index.js';
export const checkin = () => {
  const divCheckIn = document.createElement('div');
  const viewCheckIn = `
    <div class='containerCheckin'>
      <div class='header'>
        <div class='logo'>
          <img src='img/palmerita.png' class='logotipo'alt='logo'>
        </div>
        <div class='title'>
          <h1>ourist places</h1>
        </div>       
      </div>
      <div class='tituloRegistro'>
        <h2 class='User register'>User register</h2>
      </div>
      <div class='menuChekIn'>
        <div class='formChekIn'>
          <label class='adress'>Email Adress</label>
            <input type='email' name='email' class='checkin-email' placeholder='E-mail'>      
          <label class='password'>Enter  6 digit password</label>
            <input type='password' name='contraseña' class='checkin-password' paceholder='password'>
          <div class='checkIn'>  
            <button id='buttonCheckIn' class='buttonCheckIn'>'Check In'</button>
          </div>  
        </div>             
      </div>
      <div class='google'>
        <button id='buttonGoogle' class='buttonGoogle'>checkin with Google</button>
      </div> 
    </div>`;
  divCheckIn.innerHTML = viewCheckIn;

  const buttonGoogle = divCheckIn.querySelector('.buttonGoogle');
  buttonGoogle.addEventListener('click', () => {
    google();
    location.href = '#/start';
  });
  const buttonCheckIn = divCheckIn.querySelector('#buttonCheckIn');
  buttonCheckIn.addEventListener('click', () => {
    let email = document.querySelector('.checkin-email');
    let password = document.querySelector('.checkin-password');
    email = email.value;
    password = password.value;
    register(email, password);
    location.href = '#/start';
  });

  return divCheckIn;
};
