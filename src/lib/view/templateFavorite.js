export const favorite = () => {
  const divFavorite = document.createElement('div');
  const viewFavorite = `
  <div class='favoriteContainer'>
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
      <div>
      <div class='containerFavorite'>
        <h2>Favorite</h2>
      <div class='favoriteList'>
      </div>
      <div class='public'>
      <img class='buttonPublic1' src='img/img1.jpg'  alt="imagen">
    </div>
    <div class='public'>
      <img class='buttonPublic2' src='img/img2.jpg'  alt="imagen">
    </div>
    <div class='public'>
      <img class='buttonPublic3' src='img/img3.jpg'  alt="imagen">
    </div><div class='public'>
    <img class='buttonPublic4' src='img/img5.jpg'  alt="imagen">
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

  divFavorite.innerHTML = viewFavorite;
  return divFavorite;
};
