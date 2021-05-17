export const shops = () => {
  const divShops = document.createElement('div');
  const viewShops = `
    <div class='shopsContainer'>
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
          <a id ='backshops' class ='back'><img src='img/volver8.png' alt='profile' /></a>
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
      <div class='containerShops'>
        <div class='subtitulo'>
          <h2>Shops</h2>
        </div>  
        <div class='shopsList'>    
        <div class='shops1'>
          <a  ><img src='img/avion.png' alt='imagen Pasajes'class='pasajes' /></a>
        </div>
          <div class='shops2'>
              <a ><img src='img/paquetes2.png' alt='imagen paquetes' class='paquetes' /></a>
            </div>
            <div class='shops3'>
              <a ><img src='img/hotel.png' alt='imagen hotel' class='hotel' /></a>
            </div>
            <div class='shops4'>
              <a ><img src='img/restaurant.png' alt='imagen restaurant' class='restaurant' /></a>
            </div>
          </div>
          <div class='footerShops'>
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

  divShops.innerHTML = viewShops;
    const buttonBackshops = divShops.querySelector('#backshops');
  buttonBackshops.addEventListener('click', e => {
  history.back();
  });
  return divShops;
};
