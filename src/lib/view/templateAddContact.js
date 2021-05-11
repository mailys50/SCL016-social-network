export const addContact = () => {
  const divAddContact = document.createElement('div');
  const viewAddContact =  `
    <div class='addContainer'>
      <div class='header'>
        <div class='logo'>
          <img src='img/logotipo.png' alt='logo'>
        </div>
        <div class='title'>
         <h1>ourist places</h1>
        </div>
      </div>
      <div class='foto2'> 
        <a title='profile' href='#/profile'><img src='img/usuario1.png' alt='profile' /></a></div>
        <div class='nombreUsuario'></div>
      </div>
      <div class='menu'>
        <ul>
          <li>
            <a href='#/AddContact'>Add Contact</a>
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
        
      <div class='title'>
       <h2>Add Contact</h2>
      </div>
      <div class='materialcompartido'>
        <div class='numeroUno'></div>            
        <div class='numeroDos'></div>
        <div class='numeroTres'></div>
        <div class='numeroCuatro'></div>           
      </div>  
    <div class='footer'>
      <div class='inicio'>
        <a title='home' href='#/start'><img src='img/casa.png' alt='home' /></a>
      </div>
      <div class='favorito'>
        <a title='favorite' href='#/favorite'><img src='img/estrella.png' alt='Favorite' /></a>
      </div>
      <div class='tienda'>
        <a title='shops' href='#/shops'><img src='img/tienda.png' alt='shops' /></a>
      </div>
      <div class='usuario'>
        <a title='profile' href='#/profile'><img src='img/usuario1.png' alt='profile' /></a>
      </div>
    </div> 
    </div> `;
  divAddContact.innerHTML = viewAddContact;
  return divAddContact;
};
