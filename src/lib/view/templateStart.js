import { addComment } from '../index.js';
const localStorage = window.localStorage; 
export const start = () => {
  const divStart = document.createElement('div');
  const viewStart = `
  <div class='startContainer'>
  <div class='header'>
    <div class='logo'>
      <img src='img/logotipo.png' alt='logo' />
    </div>
    <div class='title'>
      <h1>ourist places</h1>
    </div>
    <div class='usuario'>
      <a title='profile' href='#/profile'><img src='img/usuario1.png' alt='profile' /></a>
    </div>
  </div>
  <div class='menu'>
    <ul>
      <li>
        <a href='#/AddContact'>AddContact</a>
      </li>
      <li>
        <a href='#/contact'>Contact</a>
      </li>
      <li>
        <a href='#/favorite'>Favorite </a>
      </li>
      <li>
        <a href='#/shops'>Shops</a>
      </li>
      <li>
        <a href='#/start'>start</a>
      </li>
    </ul>
  </div>
  <div class='containerStart'>    
  </div>
  <div>
    <h2>Start</h2>
  </div>
  <div class='generalList'>
    <div class='userShared'>
      <div class='like'>
      <input type='image' class='buttonLike' src='img/estrellaAzul.png' id='buttonLike' />
      </div>
      <div class='writeComment'>
        <input type='image' class='buttonCommet' src='img/mensaje1.png' id='buttonComment' />
      </div>
      <div class='share'>
        <input type='image' class='buttonShare' src='img/enviar1.png' id='buttonShare' />
      </div>
    </div>
    <div class='sum'>
      <div class='likeSum'></div>
      <div class='commentSum'></div>
    </div>
    <div class='commentsUser'></div>
    <div class='comment'>
      <label><img src='img/usuario1.png' alt='profile' /></label>
      <input type='text' name='comments' class='comments' placeholder='comments' />
      <div class='send'>
        <input type='image' class='buttonSend' src='img/enviar1.png' id='buttonSend' alt='enviar' />
      </div>
    </div>
  </div>
  <div class='footer'>
    <div class='inicio'>
      <a title='home' href='#/start'><img src='img/casa.png' alt='home' /></a>
    </div>
    <div class='favorito'>
      <a title='favorite' href='#/favorite'><img src='img/estrella.png' alt='Favorite' /></a>
    </div>
    <div class='shops'>
      <a title='shops' href='#/shops'><img src='img/tienda.png' alt='shops' /></a>
    </div>
    <div class='usuario'>
      <a title='profile' href='#/profile'><img src='img/usuario1.png' alt='profile' /></a>
    </div>
  </div>
</div>`;

  divStart.innerHTML = viewStart;

   // suma de like 
   const buttonLike = divStart.querySelector('#buttonLike');
   buttonLike.addEventListener('click', () => {
    if (localStorage.contador) {
      localStorage.contador= parseInt(localStorage.contador) + 1;
    }else {
      localStorage.contador = 1
    }
    document.querySelector('.likeSum').innerHTML = localStorage.contador; 
  });

// comemtarios
  const buttonSend = divStart.querySelector('#buttonSend');
  buttonSend.addEventListener('click', () => {
    let comment = document.querySelector('.comments').value;
    document.querySelector('.commentsUser').innerHTML = comment;
    addComment(comment);
  });
  // suma de comentarios 
  const buttonComment = divStart.querySelector('#buttonSend');
  buttonComment.addEventListener('click', () => {
    if (localStorage.contador) {
      localStorage.contador= parseInt(localStorage.contador) + 1;
    }else {
      localStorage.contador = 1
    }
    document.querySelector('.commentSum').innerHTML = localStorage.contador;
 
  });

  return divStart;
};
