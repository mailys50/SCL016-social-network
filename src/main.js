// Este es el punto de entrada de tu aplicacion
import { myFunction } from './lib/index.js';
import {menu} from './lib/view/templateMenu.js';
import {checkin} from './lib/view/templateCheckIn.js';
import {login } from './lib/view/templateLogIn.js'; 
import {signoff} from './lib/view/templateSignOff.js'; 
import {changeRouter } from "./lib/router.js"





//inicializar aplicacion
  const init = ()=>{
    // CARGAR MENU
    document.getElementById("root").innerHTML= menu();
    // document.getElementById("root").appendChild(checkin()); //no va aqui
    // document.getElementById("root").appendChild(login()); //no va aqui
   
   //pasar parametro a router
    window.addEventListener("hashchange", () =>{
      myFunction();
      //para llamar al hash se utiliza window.location.hash
      console.log(window.location.hash);
      changeRouter(window.location.hash);

  })
 }
  //aqui le decimos window cuando se cargue la pantalla vamos a llamar a init
    window.addEventListener("load", init)