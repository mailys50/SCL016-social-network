export const login = () => {
    const divLogIn = document.createElement("div");
    const viewLogIn =

    `
    <div class="login">
      <div class="header">
      <div class="logo">
        <img src="img/favicon.png" alt="logo">
      </div>
      <div class="tituloRegistro">
      <h2 class="registroUsuario">Iniciar Sesion</h2>
    </div>
    <div class="main">
      <div class="record"> 
        <form id="login-form">
          <div class="form-group">
            <input type="email" id="login-email" class="form-control" placeholder="Title" required>
          </div>
          <div class="form-group">
          <input type="password" id="login-password" class="form-control" placeholder="Password" required>
        </div>
        <button type="submit" class="buttonLogIn">Save changes</button>
      </form>
    </div>`
    
    divLogIn.innerHTML=viewLogIn;
    return divLogIn;
}