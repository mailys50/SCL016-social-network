export const profile = () => {
  const divProfile = document.createElement('div');
  const viewProfile =  `
  <div class='profileContainer'>
      <div class='header'>
        <div class='logo'>
        <img src='img/palmerita.png' class='logotipo'alt='logo'>
        </div>
        <div class='title'>
          <h1>ourist places</h1>
        </div>
      </div>
      <div class='menu'>
      <div class='usuario'>
        <a title='profile' href='#/profile'><img src='img/usuario1.png' alt='profile' /></a>
      </div>
      <div class='back'>
        <a id ='back' class ='back'><img src='img/volver.png' alt='profile' /></a>
      </div>
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
      <div class='Profile'>
      </div>
      <div>
        <h2>Profile</h2>
      </div>
      <div class='favoriteList'>aqui imagenes y videos perfil</div>
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

  divProfile.innerHTML = viewProfile;

  const buttonBack = divProfile.querySelector('#back');
  buttonBack.addEventListener('click', e => {
  history.back();
});
  return divProfile;
};
