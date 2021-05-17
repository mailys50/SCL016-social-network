export const addContact = () => {
  const divAddContact = document.createElement("div");
  const viewAddContact = `
    <div class='addContainer'>
      <div class='header1'>
        <div class='logo'>
          <img src='img/palmerita.png' class='logotipo1'alt='logo'>
        </div>
        <div class='title'>
          <h1 class='subtitle'>ourist places</h1>
        </div>
        <div class='usuario'>
          <a title='profile' href='#/profile'><img src='img/usuario2.png' alt='profile' class= 'user1' /></a>
        </div>
        <div class='back1'>
          <a id ='backAdd' class ='back'><img src='img/volver8.png' alt='profile' /></a>
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
      <div class='containerAddContact'>
        <div class='compartidoUsuario'>        
          <div class='subtitulo'>
            <h2>Add Contact</h2>
          </div>
         <div class='contAddContact'>
           <div class='formAddContact'>
             <label class='adress'>Nombre</label>
             <input type='text' name='contacto' class='checkin-email' placeholder='nombre'>    
             <label class='adress'>Email Adress</label>
             <input type='email' name='email' class='checkin-email' placeholder='E-mail'>    
           </div>
           <div class='AddContact'>  
          <button id='buttonAddContact' class='buttonAddContact'>'Add'</button>
        </div>
      <div class='footer'>
        <div class='inicio'>
          <a title='home' href='#/start'><img src='img/home.png' alt='home' class= 'home' /></a>
        </div>
        <div class='favorito'>
          <a title='favorite' href='#/favorite'><img src='img/start.png' class= 'start' alt='Favorite' /></a>
        </div>
        <div class='shops'>
          <a title='shops' href='#/shops'><img src='img/tienda8.png' alt='shops' class= 'shops'/></a>
        </div>
        <div class='usuario'>
          <a title='profile' href='#/profile'><img src='img/usuario2.png' alt='profile' class= 'user4' /></a>
        </div>
      </div>
    </div>`;
  divAddContact.innerHTML = viewAddContact;
    const buttonBack1 = divAddContact.querySelector('#backAdd');
  buttonBack1.addEventListener('click', e => {
  history.back();
  });

  return divAddContact;
};
