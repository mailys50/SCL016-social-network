export const contact = () => {
  const divContact = document.createElement("div");
  const viewContact = `
    <div class='contactContainer'>
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
          <a id ='backContac' class ='back'><img src='img/volver8.png' alt='profile' /></a>
        </div>
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
      <div class='containerContact'>        
      </div>
      <div class='subtitulo'>
        <h2>Contact</h2>
      </div>
      <div class='ContactList'></div>
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
  divContact.innerHTML = viewContact;
    const buttonBackContac = divContact.querySelector('#backContac');
  buttonBackContac.addEventListener('click', e => {
  history.back();
  });
  return divContact;
};
