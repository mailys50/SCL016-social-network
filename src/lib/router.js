 import { checkin} from './view/templateCheckIn.js';
// // import {contactos} from './view/templateContantos.js';
 import { login } from './view/templateLogIn.js ';
// // import { foto } from './view/templateFoto.js ';
// // import { perfil } from ''./view/templatePerfil.js ';
// // import { tienda } from ''./view/templateTienda.js ';
// // import { video } from ''./view/templateVideo.js ';
 import { menu } from './view/templateMenu.js';

 //exporatamos una const para cambiar rutacon changeRoute con parametro hash y pasar el hash
 export const changeRouter =(hash)=>{ 
     // le aplicamos una condicional que le dice que si el hash es igual a la ruta #/ se active la funcion que nos mostrará la vista que nosotros queramos
     console.log(hash);
     if (hash === "#/" ){
         console.log("hash/");
         return showTemplate (hash)         
     } else if (hash === "#/logIn") {
        console.log("hash/logIn");
         return showTemplate(hash)
     } else if (hash ==="#/singOff") {
        console.log("hash/singOff");
        return showTemplate(hash)
        //par cuando no existe la pagina
    } 
      else {
          console.log("else");
         return showTemplate (hash)
        
     }
        
    }
     //creamos la funcion showtemplate

 const showTemplate = (hash) =>{
     const containerRoot= document.getElementById("root");
     //para que el menu no se borre, si quiere recargar en cero se coloca vacio
     containerRoot.innerHTML= "";
    
     switch (hash) {
         case "#/":
             containerRoot.appendChild(checkin());
             break;
          
         case "#/logIn":
             containerRoot.appendChild(login());
             break;
         
             case "#/singOff":
                containerRoot.appendChild(signoff());
                break;
    
         default:
             containerRoot.innerHTML= '<h2> no existe </h2>'
             break;     }
 }
