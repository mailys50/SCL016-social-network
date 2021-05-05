import { addNote } from '../index.js';
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
        <input type='image' class='buttonSend' src='img/estrellaAzul.png' id='buttonSend' alt='enviar' />
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
// suma de me gusta
  const buttonLike = divStart.querySelector('#buttonLike');
   let like =0;  
   buttonLike.addEventListener('click', () => {
     like ++;
     document.querySelector('.likeSum').innerHTML = like;
// suma de comentarios  
   });
   const buttonComment = divStart.querySelector('#buttonComment');
   let comment =0;  
   buttonComment.addEventListener('click', () => {
    comment ++;
     document.querySelector('.commentSum').innerHTML = comment;
  
   });
// comemtarios
  const buttonSend = divStart.querySelector('#buttonSend');
  buttonSend.addEventListener('click', () => {
    let note = document.querySelector('.comments');
    note = note.value;
    console.log(note);
    document.querySelector('.commentsUser').innerHTML = note;
    addNote();
  });

  return divStart;
};
