export const shops = () => {
  const divShops = document.createElement("div");
  const viewShops = `
    <div class='shopsContainer'>
        <div class='header'>
          <div class='logo'>
            <img src='img/logotipo.png' alt='logo' />
          </div>
          <div class='title'>
            <h1>ourist places</h1>
          </div>
        </div>
        <div class='usuario'>
        <a title='profile' href='#/profile'><img src='img/usuario1.png' alt='profile' /></a>
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
        <div class='containerShops'>
          <div>
            <h2>Shops</h2>
          </div>
          <div class='menu'>         
          <div class='shops1'>
            <div class='usuario'>
              <a  ><img src='img/avion.png' alt='imagen Pasajes'class='pasajes' /></a>
            </div>
            <div class='usuario'>
              <a ><img src='img/paquetes2.png' alt='imagen paquetes' class='paquetes' /></a>
            </div>
            <div class='usuario'>
              <a ><img src='img/hotel.png' alt='imagen hotel'class='hotel' /></a>
            </div>
            <div class='usuario'>
              <a ><img src='img/restaurant.png' alt='imagen restaurant' class='restaurant' /></a>
            </div>
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

  divShops.innerHTML = viewShops;
  return divShops;
};
