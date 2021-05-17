export const profile = () => {
  const divProfile = document.createElement('div');
  const viewProfile =`
    <div class='profileContainer'>
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
          <a id ='backProfile'><img src='img/volver8.png' alt='profile'  class ='back' /></a>
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
      <div class='containerProfile'>
        <div class='subtitulo'>
          <h2>Profile</h2>
        </div>
        <div class='favoriteList'>
          <div class='public1'>
            <img class='imgPublic1' src='img/img1.jpg'  alt="imagen">
          </div>
          <div class='public2'>
            <img class='imgPublic2' src='img/img2.jpg'  alt="imagen">
          </div>
          <div class='public3'>
            <img class='imgPublic3' src='img/img3.jpg'  alt="imagen">
          </div>
          <div class='public4'>
            <img class='imgPublic4' src='img/img5.jpg'  alt="imagen">
          </div>
          <div class='public5'>
            <img class='imgPublic3' src='img/paisaje2.jpg'  alt="imagen">
          </div>
          <div class='public6'>
            <img class='imgPublic4' src='img/paisaje5.jpg'  alt="imagen">
          </div>
        </div>
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
    </div>
 </div>`;
  divProfile.innerHTML = viewProfile;

  const buttonBackProfile = divProfile.querySelector('#backProfile');
  buttonBackProfile.addEventListener('click', e => {
  history.back();
});
  return divProfile;
};
