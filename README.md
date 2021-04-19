# Creando una Red Social

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Entrega](#7-entrega)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)

## 1. Preámbulo

Instagram, Snapchat, Twitter, Facebook, Twitch, Linkedin, etc. Las redes
sociales han invadido nuestras vidas. Las amamos u odiamos, y muchos no podemos
vivir sin ellas.

Hay redes sociales de todo tipo y para todo tipo de intereses. Por ejemplo,
en una ronda de financiamiento con inversionistas, se presentó una red social
para químicos en la que los usuarios podían publicar artículos sobre sus
investigaciones, comentar en los artículos de sus colegas, y filtrar artículos
de acuerdo a determinadas etiquetas o su popularidad, lo más reciente, o lo
más comentado.

## 2. Resumen del proyecto

En este proyecto construirás una Red Social sobre lo que decidan tú y tu equipo.
Podría ser, por ejemplo, sobre alimentación saludable, feminismo, educación,
salud, energías renovables, amantes de las [Empanadas](https://es.wikipedia.org/wiki/Empanada)
o de los [Tacos de Canasta](https://es.wikipedia.org/wiki/Taco), de la
[Feijoada](https://es.wikipedia.org/wiki/Feijoada), o de lo que sea.

Tu Red Social tendrá que permitir a cualquier usuario crear una cuenta de
acceso y loguearse con ella; crear, editar, borrar y _"likear"_ publicacciones.

## 3. Objetivos de aprendizaje

El objetivo principal de aprendizaje de este proyecto es construir una
[Single-page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application)
[_responsive_](../../topics/css/02-responsive) (con más de una vista / página)
en la que podamos **leer y escribir datos.**

### HTML y CSS

* [ ] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [ ] Uso de selectores de CSS.
* [ ] [Uso de flexbox en CSS.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [ ] [Uso de CSS Grid Layout](https://css-tricks.com/snippets/css/complete-guide-grid/)

### DOM y Web APIs

* [ ] Uso de selectores del DOM.
* [ ] Manejo de eventos del DOM (addEventListener, removeEventListener,
Event objeto, delegación de eventos)
* [ ] [Manipulación dinámica del DOM](
  https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
(appendChild | createElement | createTextNode | innerHTML | textContent | etc.)
* [ ] Implementación de routing ([History API.](
  https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador
  ) | `hashchange`)

### JavaScript

* [ ] Uso de condicionales (if-else | switch | operador ternario)
* [ ] Uso de funciones (parámetros | argumentos | valor de retorno)
* [ ] Manipular arrays (filter | map | sort | reduce)
* [ ] Manipular objects (key | value)
* [ ] Uso ES modules ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
| [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
* [ ] Diferenciar entre expression y statements.
* [ ] Diferenciar entre tipos de datos atómicos y estructurados.
* [ ] [Uso de callbacks.](https://developer.mozilla.org/es/docs/Glossary/Callback_function)
* [ ] [Consumo de Promesas.](https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises)

### Testing

* [ ] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)
* [ ] [Testeo asíncrono.](https://jestjs.io/docs/es-ES/asynchronous)
* [ ] [Uso de librerias de Mock.](https://jestjs.io/docs/es-ES/manual-mocks)

### Estructura del código y guía de estilo

* [ ] Organizar y dividir el código en módulos (Modularización)
* [ ] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [ ] Uso de linter (ESLINT)

### Git y Github

* [ ] Uso de comandos de git (add | commit | pull | status | push)
* [ ] Manejo de repositorios de GitHub (clone | fork | gh-pages)
* [ ] Colaboración en Github (branches | pull requests | |tags)
* [ ] Organización en Github (projects | issues | labels | milestones)

### Firebase

* [ ] [Firestore.](https://firebase.google.com/docs/firestore)
* [ ] [Firebase Auth.](https://firebase.google.com/docs/auth/web/start)
* [ ] [Firebase security rules.](https://firebase.google.com/docs/rules)
* [ ] Observadores. ([onAuthStateChanged](https://firebase.google.com/docs/auth/web/manage-users?hl=es#get_the_currently_signed-in_user)
 | [onSnapshot](https://firebase.google.com/docs/firestore/query-data/listen#listen_to_multiple_documents_in_a_collection))

### UX

* [ ] Diseñar la aplicación pensando y entendiendo al usuario.
* [ ] Crear prototipos para obtener feedback e iterar.
* [ ] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
* [ ] Planear y ejecutar tests de usabilidad.

## 4. Consideraciones generales

* Este proyecto se debe trabajar en equipos de tres.

* La lógica del proyecto debe estar implementada completamente en JavaScript
  (ES6+), HTML y CSS :smiley:. Para este proyecto **no está permitido** utilizar
  _frameworks_ o librerías de CSS y JS.

* La división y organización del trabajo debe permitir, sin excepciones, que
  **cada integrante** del equipo practique el aprendizaje de todo lo involucrado
  en **cada historia**. _No se dividan el trabajo como en una fábrica._
  - ¿Hasta acá has avanzado en tus proyectos con cierta fluidez y sin mayores
    problemas? Sé generosa con tus compañeras, permíteles aprender y practicar
    sin restricciones, aunque tome un poco más de tiempo. Aproveha de
    _coachearlas_, de hacer _pair programming_, una de las mejores maneras de
    aprender es explicando verbalmente.

  - ¿Se te está haciendo difícil y te cuesta un poco más avanzar? No te quedes
    con las partes "fáciles" del proyecto, conversa, negocia, exige tu oportunidad
    para practicar y aprender lo que se te hace más difícil.

* Solamente pueden trabajar en una única historia por vez, no pueden avanzar a
  la siguiente sin haber completado la anterior. La historia se completa cuando
  se cumplen **todos** sus Criterios de Aceptación + **toda** su Definición
  de Terminado.

Para comenzar tendrás que hacer un _fork_ y _clonar_ este repositorio.

## 5. Criterios de aceptación mínimos del proyecto

### 5.1 Boilerplate

Este proyecto no incluye un _boilerplate_, así es que tendrás que definir la
estructura de carpetas y escribir tus propias Pruebas Unitarias (_tests_). Para
hacerlo, puedes guiarte de los proyectos anteriores.

### 5.2 Definición del producto

En el `README.md` cuéntanos brevemente cómo descubriste las necesidades de los
usuarios y cómo llegaste a la definición final de tu producto. Es importante
que detalles:

* Quiénes son los principales usuarios de producto.
* Qué problema resuelve el producto / para qué le servirá a estos usuarios.

### 5.3 Historias de usuario

Una vez que entiendas las necesidades de tus usuarixs, escribe las Historias de
Usuario que representen todo lo que necesitan hacer/ver en la Red Social. Cada
una de tus Historias de Usuario debe tener:

* **Criterios de Aceptación:** todo lo que debe ocurrir para satisfacer las
  necesidades del usuario.

* **Definición de terminado:** todos los aspectos técnicos que deben cumplirse
  para que, como equipo, sepan que esa historia está terminada y lista
  para publicarse. **Todas** tus Historias de Usuario (salvo excepciones), deben
  incluir estos aspectos en su Definición de Terminado (más todo lo que
  necesiten agregar):

  - Debe ser una SPA.
  - Debe ser _responsive_.
  - Deben haber recibido _code review_ de al menos una compañera de otro equipo.
  - Hicieron los _test_ unitarios
  - Testearon manualmente buscando errores e imperfecciones simples.
  - Hicieron _pruebas_ de usabilidad e incorporaron el _feedback_ de los
    usuarios como mejoras.
  - Desplegaron su aplicación y etiquetaron la versión (git tag).

### 5.4 Diseño de la Interfaz de Usuario (prototipo de baja fidelidad)

Debes definir cuál será el flujo que seguirá el usuario dentro de tu aplicación
y, con eso, diseña la Interfaz de Usuario (UI por sus siglas en inglés) que
siga este flujo.

### 5.5 Responsive

Debe verse bien en dispositivos de pantallas grandes
(computadoras/es, laptops, etc.) y pequeñas (_tablets_, celulares, etc.). Te
sugerimos seguir la técnica de _`mobile first`_ (más detalles sobre esta técnica
al final).

### 5.6 Consideraciones del comportamiento de la interfaz de usuario (UI)

Estas consideraciones te ayudarán a escribir las Definiciones de Terminado de
tus H.U.:

#### Creación de cuenta de usuario e inicio de sesión

* _Login_ con Firebase:
  - Para el _login_ y las publicaciones en el muro puedes utilizar [Firebase](https://firebase.google.com/products/database/)
  - Creación de cuenta de acceso y autenticación con cuenta de correo y
    contraseña, y también con una cuenta de Google.
* Validaciones:
  - Solamente se permite el acceso a usuarios con cuentas válidas.
  - No pueden haber usuarios repetidos.
  - La cuenta de usuario debe ser un correo electrónico válido.
  - Lo que se escriba en el campo (_input_) de contraseña debe ser secreto.
* Comportamiento:
  - Al enviarse el formulario de registro o inicio de sesión, debe validarse.
  - Si hay errores, se deben mostrar mensajes descriptivos para ayudar al
  usuario a corregirlos.

#### Muro/timeline

* Validaciones:
  - Al publicar, se debe validar que exista contenido en el _input_.
* Comportamiento:
  - Al recargar la aplicación, se debe verificar si el usuario está _logueado_
    antes de mostrar contenido.
  - Poder publicar un _post_.
  - Poder dar y quitar _like_ a una publicación. Máximo uno por usuario.
  - Llevar un conteo de los _likes_.
  - Poder eliminar un post específico.
  - Pedir confirmación antes de eliminar un _post_.
  - Al dar _click_ para editar un _post_, debe cambiar el texto por un _input_
    que permita editar el texto y luego guardar los cambios.
  - Al guardar los cambios debe cambiar de vuelta a un texto normal pero con la
    información editada.
  - Al recargar la página debo de poder ver los textos editados.

### 5.7 Consideraciones técnicas Front-end

* Separar la manipulación del DOM de la lógica (Separación de responsabilidades).
* Contar con múltiples vistas. Para esto, tu aplicación debe ser una
 [Single Page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application)
* Alterar y persistir datos. Los datos que agregues o modifiques deberán
  persistir a lo largo de la aplicación. Te recomendamos que uses
  [Firebase](https://firebase.google.com/) para eso también.

#### Pruebas unitarias (unit tests)

* Recuerda que no hay un _setup_ de **tests** definido, dependerá de
  la estructura de tu proyecto. Algo que no debes de olvidar es pensar en éstas
  pruebas, te pueden ayudar a definir la estructura y nomenclatura de tu lógica.

* Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_,
  _lines_, y _branches_.

### 5.8 Consideraciones técnicas UX

* Hacer al menos 2 entrevistas con usuarios.
* Hacer un  prototipo de baja fidelidad.
* Asegurarte de que la implementación en código siga los lineamientos del
  diseño.
* Hacer sesiones de _testing de usabilidad_ con el producto en HTML.

## 6. Hacker edition

Las secciones llamadas _Hacker Edition_ son **opcionales**. Si **terminaste**
con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás
profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

* Permite crear posts con imágenes.
* Permite buscar usuarios, agregar y eliminar "amigos".
* Permite definir la privacidad de los _posts_ (público o solamente para amigos).
* Permite ver su muro de cualquier usuario "no-amigo" (solamente los
  posts _públicos_).
* Permite comentar o responder una publicación.
* Permite editar perfil.

## 7. Entrega

El proyecto será _entregado_ subiendo tu código a GitHub (`commit`/`push`) y la
interfaz será desplegada usando GitHub pages u otro servicio de hosting que
puedas haber encontrado en el camino.

***

## 8. Pistas, tips y Lecturas complementarias

### Mobile first

El concepto de [_mobile first_](https://www.mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/)
hace referencia a un proceso de diseño y desarrollo donde partimos de cómo se ve
y cómo funciona la aplicación en un dispositivo móvil primero, y más adelante se
ve como adaptar la aplicación a pantallas progresivamente grandes y
características específicas del entorno desktop. Esto es en contraposición al
modelo tradicional, donde primero se diseñaban los websites (o webapps) para
desktop y después se trataba de _arrugar_ el diseño para que entre en pantallas
más chicas. La clave acá es asegurarse de que desde el principio diseñan usando
la vista _responsive_ de las herramientas de desarrollador (developer tools) del
navegador. De esa forma, partimos de cómo se ve y comporta la aplicación en una
pantalla y entorno móvil.

### Múltiples vistas

En proyectos anteriores nuestras aplicaciones habían estado compuestas de una
sola _vista_ principal (una sóla _página_). En este proyecto se introduce la
necesidad de tener que dividir nuestra interfaz en varias _vistas_ o _páginas_
y ofrecer una manera de navegar entre estas vistas. Este problema se puede
afrontar de muchas maneras: con archivos HTML independientes (cada uno con su
URL) y links tradicionales, manteniendo estado en memoria y rederizando
condicionalmente (sin refrescar la página), [manipulando el historial del
navegador](https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador)
con [`window.history`](https://developer.mozilla.org/es/docs/Web/API/Window/history).
En este proyecto te invitamos a explorar opciones y decidir una opción
de implementación.

### Escritura de datos

En los proyectos anteriores hemos consumido (leído) datos, pero todavía no
habíamos escrito datos (salvar cambios, crear datos, borrar, ...). En este
proyecto tendrás que crear (salvar) nuevos datos, así como leer, actualizar y
modificar datos existentes. Estos datos se podrán guardar de forma remota
usando [Firebase](https://firebase.google.com/).

Otras:

* [Modulos: Export](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/export)
* [Modulos: Import](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import)
* [Diseño web, responsive design y la importancia del mobile first - Media Click](https://www.mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/)
* [Mobile First: el enfoque actual del diseño web móvil - 1and1](https://www.1and1.es/digitalguide/paginas-web/diseno-web/mobile-first-la-nueva-tendencia-del-diseno-web/)
* [Mobile First - desarrolloweb.com](https://desarrolloweb.com/articulos/mobile-first-responsive.html)
* [Mobile First - ZURB](https://zurb.com/word/mobile-first)
* [Mobile First Is NOT Mobile Only - Nielsen Norman Group](https://www.nngroup.com/articles/mobile-first-not-mobile-only/)


 ## TEMA DEL PROYECTO
Este proyecto es una Red Social, pensado para aquellos usuarios amantes de las bellezas naturales y sitios o lugares impresionantes.

 ## TIPO DE USUARIO
 Va dirijido a usuarios mayores de 18 años, en particular a esos usuarios que deseen ver o compartir sus experiencias turisticas, fotos, video....  


# Nombre Del Proyecto

 ## Tourist Places





 ## TITULO DEL PROYECTO
MEMORY CODE

## PROTOTIPO DE BAJA FIDELIDAD:
-Realizamos el prototipo de baja fidelidad para hacer un testeo con los posible usuarios.

 <img src="img/prototipoUno.png" alt="prototipoUno" width="200"/>

## TESTEO
-Realizamos una encuesta para verificar que nuestro proyecto era aceptable acontinuacion el link de la encuesta.

<a herf="https://docs.google.com/forms/d/1OMjEv8ONb850h3XaI-IQCkK9ZGAQR_IG3vjP9LZt4as/edit?ts=603e4585&gxids=7628#responses"></a>
 
 y obtuvimos como resultado las siguientes respuesta:
 
 <img src="img/encuestaRespuesta1.png" alt="prototipoUno" width="200"/>
 <img src="img/encuestaRespuesta2.png" alt="prototipoUno" width="200"/>
 <img src="img/encuestaRespuesta3.png" alt="prototipoUno" width="200"/>
 <img src="img/encuestaRespuesta4.png" alt="prototipoUno" width="200"/>
 <img src="img/encuestaRespuesta5.png" alt="prototipoUno" width="1000"/>

 esta ultima respuesta nos llamo mucho la atención ya que no colocamos los items de seleccion de los conceptos basicos a aprender.
 
 ## HISTORIA DE USUARIO
 las historias de usuario tomadas
 para nuestro prototipo fueron las siguientes:
 iniciamos con las siguientes Historias:
 <img src="img/historiaUsuario1.png" alt="prototipoUno" width="1000"/>
 pero al realizar el feedback nos recomendaron hacerlas mejor y obtuvimos de nuestros usuarios las siguientes historias:
 <img src="img/historia1.jpg" alt="prototipoUno" width="1000"/>
 <img src="img/historia2.png" alt="prototipoUno" width="1000"/>
 <img src="img/historia3.png" alt="prototipoUno" width="1000"/>
 <img src="img/historia4.png" alt="prototipoUno" width="1000"/>
  <img src="img/historia5.png" alt="prototipoUno" width="1000"/>


 ## PROTOTIPO DE ALTA FIDELIDAD

 Tomando en concideracion las historias de usuario comenzamos  nuestro prototipo de alta fidelidad.
 - Realizamos dos prototipos para obtener feedback sobre ellos y tomar su opinion para elejir el trototipo a trabajar:

### opción 1

 <img src="img/prototipoopcion1.png" alt="prototipoUno" width="1000"/>

### opción 2

 <img src="img/prototipoopcion2.png" alt="prototipoUno" width="1000"/>

 ## PRIMER SPRINT
-Nuestros usiarios eligieron la opción 2 y comenzamos a trabajar su estructura.
-se crea el contenido de las cartas de la categoria HTML.

## GIT COLABORATIVO
-Nathaly entro a la carpeta donde se va a clonar el proyecto y con clic derecho le damos a la opción Git Gash  Here que nos abre una terminal donde colocamos "git clone y la url de la carpeta en "gitHub" que esta en el repositorio remoto.
-le envio a Mailys la url de su proyecto (clonado). y esta entró. ya dentro del repositorio remoto de Nathaly forkea el proyecto y crea una Rama.
-crea la rama en la terminal local con:
git remote -v (para ver la rama a las que estas conectados)
git branch _nombre de la rama_
git branch -l (para ver en que rama estoy)
-Nathaly tambien creo una rama para no trabajar directamente en la rama master.
 -luego entra a Visual stude code entre a la terminal e intallamos el " npm install "

 # ESTRUCTURA HTML
 -Primera vista: representada por Inicio donde se selecciona la categoria a jugar.

 -Segunda, tercera y cuarta vista: juego de las opciones HTML, CSS, JS respectivamente con un boton de inicio que te redirige a la primera vista.

-Quinta vista: donde se felicita al usuario por terminar la jugada y pasa al siguiente nivel.

 # CSS
aplicamos flexbox  tanto a padres como a hijos.

### Problema con git colaborativo

En la terminal local realizamos los commit para guardar los cambios y cuando le dimos git push origin Desarrollo nos daba un  error que resolvimos con la ayuda de Ely, creando una nueva rama del proyecto y clonandolo nuevamente.
y trabajamos en partes distintas del proyecto para no generar tantos errores.

## FUNCIONALIDAD
  ### Creamos los componentes del juego

  -Para crear los componentes nos guiamos por los componentes ya existentes.
  -realizamos un componente por cada nivel de las categoria.

  ### Exportar e importar Los componentes

  - tambien nos guiamos por las exportaciones e importaciones existentes.

  ### Extraer los datos de los componentes
   para extraer los datos dentro de los componentes vemos el orden en que esta estructurado el componente y tomamos el dato que necesitamos ejemplo:
   si tenemos este componete y queremos en js obtener su clase:

name: 'cssNivelUno',
    items: [
      { id: 'cssNivel1,1,1', image: 'cartas/CSSNivel1/agua.png', class:0 },
      { id: 'cssNivel1,1,2', image: 'cartas/CSSNivel1/agua1.png', class:0 },
      { id: 'cssNivel1,2,1', image: 'cartas/CSSNivel1/amarillo.png', class:1  },
      { id: 'cssNivel1,2,2', image: 'cartas/CSSNivel1/amarillo1.png', class:1  },
     
    ],
  };


para obtener su clase:
1- el nombre :cssNivelUno
2- el items
3- el array con el numero del items que quieres la clase
4- lo que queremos obtener en este caso la clase pero tambien puede ser el id, el nombre ....

entonces nuestro codigo nos quedaria:

cssNivelUno.items[Array[1]].class


### Implementamos la funcionalidad del juego

-creamos la funcion de pasar de una vista a la otra.
-la funcion para barajar,
- funcion del cronometro.

## SEGUNDO SPRINT

mostramos nuestror avances y recibimos buenos comentarios hacia nuestro proyecto.
tambien tuvimos feedback de nuestro squa y Ely nos dieron algunas recomendaciones para no hacer nuestro HTML tan extenso y crear las cartas desde el js,

## Restructuracion del Codigo
Eliminamos todas las cartas del html y buscamos la forma de llamarlas desde el Js. implementamos varios codigos y conseguimos uno pero usaba this en su estructura nos reunimos con Marcia y nos dijo que podiamos utilizar e.target, e investigamos sobre ello y con prueba y error logramos la funcionalidad del juego en la categoria Html.

## TERCER SPRINT
mostramos la reestucturacion de nuestro Html y los avances del CSS.


## continuacion de Funcionalida
trabajamos en la funcion de enviar mensaje de Felicitaciones al usuario al terminar el primer nivel y lo logramos pero al pasar a la seleccion de una nueva categoria nos arrojaba un error y lo solucionamos con la ayuda de Sergio cambiando los input por imagen.

## CUARTO SPRINT
mostramos la funcionalidad del proyecto y obtuvimos buenos comentarios

## zoom cartas

-trabajamos para dar zoom a las cartas y lo hicimos mas responsive utilizando la media
-realizamos test de usabilidad y cronometro daba un error. al surgir el error nos dimos cuenta que la App era de aprendizaje y el usuario para poder aprender necesitaba tiempo para leer las cartas.
 
 ## QUINTO SPRINT
 mostramos nuetro proyecto funcionando y  dos formas de mostrar el contenido de las cartas mas grande, nos dijeron con cual se sentian mas comodas y lo tomamos en cosideracion para implementarlo en nuestro proyecto.

 ## ACIERTOS, TIEMPO e INTENTOS
 continuamos con la funcionalidad de nuestra App y nos dedicamos a trabajar :
 
 -los intentos cuando el usuario seleccione dos cartas.

 -Hacer que el cronometro comience cuando se presione la primera carta.

 -activar los aciertos cuando dos cartas sean pares.
 

## SEXTO SPRINT
se mostro el codigo con toda la funcionalidad activa.

 ## TEST UNITARIO

 investigamos sobre los test unitario y existen varias formas de hacerlos.

 realizamos un test para probar que la funcion Shuffle devuelve un array distinto al inicial.