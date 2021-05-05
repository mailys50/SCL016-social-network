// Este es el punto de entrada de tu aplicacion
import { menu } from './lib/view/templateMenu.js';
import { changeRouter } from './lib/router.js';
// inicializar aplicacion
const init = () => {
  // CARGAR MENU
  document.getElementById('root').innerHTML = menu();
  // pasar parametro a router
  window.addEventListener('hashchange', () => {
    // para llamar al hash se utiliza window.location.hash
    console.log(window.location.hash);
    changeRouter(window.location.hash);
  });
};
// aqui le decimos window cuando se cargue la pantalla vamos a llamar a init
window.addEventListener('load', init);
