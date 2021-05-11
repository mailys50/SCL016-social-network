import { deleteNote, getNotes, addComment } from '../index.js';
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
        <a title='profile' href='#/profile'><img src='img/usuario2.png' alt='profile' /></a>
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
    <div class='usuario'>
    <a title='profile' href='#/profile'><img src='img/usuarioDama.png' alt='profile' /></a>
  </div>
      <div class='public'>
        <img class='buttonPublic' src='img/glaciares.jpg'  alt="imagen">
      </div>
      <div class='userShared'>
        <div class='like'>
          <input type='image' class='buttonLike' src='img/estrellaAzul1.png' id='buttonLike' />
        </div>
        <div class='writeComment'>
          <input type='image' class='buttonCommet' src='img/mensaje2.png' id='buttonComment' />
        </div>
        <div class='share'>
          <input type='image' class='buttonShare' src='img/enviar2.png' id='buttonShare' />
        </div>
      </div>
      <div class='sum'>
        <div class='likeSum'></div>
        <div class='commentSum'></div>
      </div>
      <div class='commentsUser'></div>
        <div class='comment'>
          <label><img src='img/usuario2.png' alt='profile' /></label>
          <input type='text' name='comments' class='comments' placeholder='comments' />
          <div class='send'>
            <input type='image' class='buttonSend' src='img/mas.png' id='buttonSend' alt='button Send' />
            <input type='image' class='buttonDelete eliminar' src='img/menos.png' id='buttonDelete' alt='button delete' />
          </div>
      </div>
    </div>
    <div class='footer'>
      <div class='inicio'>
        <a title='home' href='#/start'><img src='img/casa1.png' alt='home' /></a>
      </div>
      <div class='favorito'>
        <a title='favorite' href='#/favorite'><img src='img/estrella1.png' alt='Favorite' /></a>
      </div>
      <div class='shops'>
        <a title='shops' href='#/shops'><img src='img/tienda1.png' alt='shops' /></a>
      </div>
      <div class='usuario'>
        <a title='profile' href='#/profile'><img src='img/usuario2.png' alt='profile' /></a>
      </div>
    </div>
  </div>`;

  divStart.innerHTML = viewStart;

  // suma de like
  const buttonLike = divStart.querySelector('#buttonLike');
  buttonLike.addEventListener('click', () => {
    if (localStorage.contador) {
      localStorage.contador = parseInt(localStorage.contador) + 1;
    } else {
      localStorage.contador = 1;
    }
    document.querySelector('.likeSum').innerHTML = localStorage.contador;
  });

  // comemtarios
  const buttonSend = divStart.querySelector('#buttonSend');
  buttonSend.addEventListener('click', () => {
    let comment = document.querySelector('.comments').value;
    document.querySelector('.commentsUser').innerHTML = comment;
    addComment(comment);
    if (localStorage.contador) {
      localStorage.contador = parseInt(localStorage.contador) + 1;
    } else {
      localStorage.contador = 1;
    }
    document.querySelector('.commentSum').innerHTML = localStorage.contador;
  });
  const buttonComment = divStart.querySelector('.buttonCommet');
  buttonComment.addEventListener('click', () => {
    // Obtener la referencia del elemento body

    const div = document.querySelector('.commentsUser');
    div.innerHTML='';
    // Crea un elemento <table> y un elemento <tbody>
    const tabla = document.createElement('table');
    const tblBody = document.createElement('tbody');
    getNotes().then((array) => {
      array.forEach((data) => {
        console.log(data.data().title);
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const textoTd1 = document.createTextNode(data.data().title);
        td1.appendChild(textoTd1);
        tr.appendChild(td1);
        const td2 = document.createElement('td');
        const deleteButton = document.createElement('a');
        deleteButton.className = 'eliminar';
        const textoTd2 = document.createTextNode('Eliminar');
        deleteButton.appendChild(textoTd2);
        deleteButton.onclick = () => {
          deleteNote(data.id);
          tr.remove();
        };
        td2.appendChild(deleteButton);
        tr.appendChild(td2);
        tblBody.appendChild(tr);
      });
    });

    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    div.appendChild(tabla);
    // modifica el atributo 'border' de la tabla y lo fija a '2';
    //tabla.setAttribute('border', '2');
  });

  return divStart;
};
