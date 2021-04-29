export const profile = () => {
  const divProfile = document.createElement("div");
  const viewProfile = `
  <div class="profile">
      <div class="header">
        <div class="logo">
          <img src="img/logotipo.png" alt="logo" />
        </div>
        <div class="title">
          <h1>ourist places</h1>
        </div>
      </div>
      <div class="menu">
        <ul>
          <li>
            <a href="#/AddContact">Add Contact</a>
          </li>
          <li>
            <a href="#/Contact">Contact</a>
          </li>
          <li>
          <a href="#/favourite">Favourite </a>
          </li>
          <li>
            <a href="#/shops">Shops</a>
          </li>
          <li>
            <a href="#/generalView">start</a>
          </li>
        </ul>
      </div>
      <div class="maincontactosUsuario">
        <div class="usuario">
          <img src="img/usuario1.png" alt="foto del usuario" />
        </div>
      </div>
      <div>
        <h2>Profile</h2>
      </div>
      <div class="favoriteList">aqui imagenes y videos perfil</div>
      <div class="footer">
        <div class="inicio">
          <img src="img/casa.png" alt="imagen de inicio" />
        </div>
        <div class="favorito">
          <img src="img/estrella.png" alt="imagen favoritos" />
        </div>
        <div class="videoo">
          <img src="img/video.png" alt="imagen video" />
        </div>
        <div class="tienda">
          <img src="img/tienda.png" alt="foto del usuario" />
        </div>
        <div class="usuario">
          <img src="img/usuario1.png" alt="foto del usuario" />
        </div>
      </div>
    </div> `;

  divProfile.innerHTML = viewProfile;
  return divProfile;
};