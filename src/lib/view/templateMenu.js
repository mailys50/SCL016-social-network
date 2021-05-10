export const menu = () => {
  const viewMenu = /*html*/`
  <div class='menuContainer'>
    <div class='header'>
      <div class='logo'>
        <img src='img/logotipo.png' alt='logo'>
      </div>
      <div class='title'>
         <h1>ourist places</h1>
      </div>
    </div>
    <div class='menu1'>
      <ul>
        <li>
          <a href='#/checkIn'>Check In</a>
        </li>
        <li>
        <a href='#/logIn'>Log In</a>
        </li>        
      </ul>
    </div>
    <div class= 'rootMenu'>
      <p>Si quieres disfrutar de las  bellezas  naturales y creaciones hermosas, o has visitado lugares impresionates y quieres  compartir tu experiencia
        resgistrate y unete a: </p>
        <strong>Tourist Places</strong>
        <p> una comunidad que te ayuda no solo  a relacionarte con  nuevas personas  , si no  a descubrir lugares impresionante.</p>
    </div>
  </div>
`;

  return viewMenu;
};
