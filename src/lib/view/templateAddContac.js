export const addContact = () => {
    const divAddContact = document.createElement('div');
    const viewAddContact = `
    <div class='add'>
    <div class='header'>
      <div class='logo'>
        <img src='img/logotipo.png' alt='logo'>
      </div>
      <div class='title'>
       <h1>ourist places</h1>
      </div>
    </div>
    <div class='menu'>
      <ul>
        <li>
        <a href='#/AddContact'>Add Contact</a>
        </li>
        <li>
        <a href='#/Contact'>Contact</a>
        </li>
        <li>
          <a href='#/favourite'>Favouvorite </a>
        </li>
        <li>
          <a href='#/shops'>Shops</a>
        </li>
        <li>
            <a href='#/generalView'>start</a>
          </li>
      </ul>
    </div>
    <div class='main'>
      <div class='compartidoUsuario'>
        <div class='foto2'></div>
        <div class='nombreUsuario'></div>
      </div>
      <div class='materialcompartido'>
        <div class='numeroUno'></div>            
        <div class='numeroDos'></div>
        <div class='numeroTres'></div>
        <div class='numeroCuatro'></div>           
      </div>  
    <div class='footer'>
      <div class='inicio'>
        <img src='img/casa.png' alt='imagen de inicio'>
      </div>
      <div class='favorito'>
        <img src='img/estrella.png' alt='imagen favoritos'>
      </div>
      <div class='video'>
        <img src='img/video.png' alt='imagen video'>
      </div>
      <div class='tienda'>
        <img src='img/tienda.png' alt='foto del usuario'>
      </div>
      <div class='usuario'>
        <img src='img/usuario1.png' alt='foto del usuario'></div>
      </div>
    </div> 
    </div> `;
    divAddContact.innerHTML = viewAddContact;
    return divAddContact;
  };
  




