import { checkin } from './view/templateCheckIn.js';
import { contact } from './view/templateContact.js';
import { login } from './view/templateLogIn.js';
import { signOff } from './view/templateSignOff.js';
import { profile } from './view/templateProfile.js';
import { addContact } from './view/templateAddContac.js';
import { home } from './view/templateHome.js';
import { recoverPassword } from './view/templateRecoverPassword.js';
import { favourite } from './view/templateFavourite.js';
import { shops } from './view/templateShops.js';

// import { menu } from './view/templateMenu.js';
// cambiar rutacon changeRoute con parametro hash
export const changeRouter = (hash) => { 
// si el hash es igual a la ruta #/ la funcion que nos mostrará la vista que queramos

  if (hash === '#/checkIn') {
    // console.log('hash/');
    return showTemplate (hash)         
  } else if (hash === '#/logIn') {
    // console.log('hash/logIn');
    return showTemplate(hash)
  } else if (hash ==='#/singOff') {
    // console.log('hash/singOff');
    return showTemplate(hash)
  } else if (hash === '#/addContact') {
    // console.log('hash/logIn');
    return showTemplate(hash)
  }  else if (hash === '#/contact') {
    // console.log('hash/logIn');
    return showTemplate(hash)
  } else if (hash === '#/profile') {
    // console.log('hash/singOff');
    return showTemplate(hash)
  } else if (hash === '#/home') {
    // console.log('hash/logIn');
    return showTemplate(hash)
  } else if (hash === '#/recoverPassword') {
    // console.log('hash/singOff');
    return showTemplate(hash)
  } else if (hash === '#/favourite') {
    // console.log('hash/logIn');
    return showTemplate(hash)
  } else if (hash === '#/shops') {
    // console.log('hash/singOff');
    return showTemplate(hash)
  // par cuando no existe la pagina
  } else {
    console.log('else');
      return showTemplate (hash)        
  }      
}
// creamos la funcion showtemplate
const showTemplate = (hash) => {
  const containerRoot= document.getElementById('root');
  // para que el menu no se borre, si quiere recargar en cero se coloca vacio
  containerRoot.innerHTML= '';    
  switch (hash) {
    case '#/checkIn':
      containerRoot.appendChild(checkin());
      break;          
    case '#/logIn':
      containerRoot.appendChild(login());
      break;         
    case '#/singOff':
      containerRoot.appendChild(signOff());
      break;
      case '#/AddContact':
      containerRoot.appendChild(addContact());
      break;          
    case '#/contact':
      containerRoot.appendChild(contact());
      break;         
    case '#/profile':
      containerRoot.appendChild(profile());
      break;
      case '#/generalView':
      containerRoot.appendChild(home());
      break;
      case '#/recoverPassword':
        containerRoot.appendChild(recoverPassword());
        break;         
      case '#/favourite':
        containerRoot.appendChild(favourite());
        break;
        case '#/shops':
        containerRoot.appendChild(shops());
        break;
    default:
      containerRoot.innerHTML= '<h2> no existe </h2>'; 
    break;    
  }
 }
