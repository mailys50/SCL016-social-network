export const checkin = () => {
    const divCheckIn = document.createElement("div");   
    const viewCheckIn =  
    `
    <div class="registroUsuario">
      <div class="header">
      <div class="logo">
        <img src="img/favicon.png" alt="logo">
      </div>
      <div class="tituloRegistro">
      <h2 class="registroUsuario">Registro de Usuario</h2>
    </div>
    </div>
    <div class="main">
      <div class="record"> 
        <form id="checkin-form">
          <div class="form-group">
            <input type="email" id="checkin-email" class="form-control" placeholder="Title" required>
          </div>
          <div class="form-group">
          <input type="password" id="checkin-password" class="form-control" placeholder="Password" required>
        </div>
        <button type="submit" class="btn btn-primary">Save changes</button>
      </form>
    </div>`   

    divCheckIn.innerHTML=viewCheckIn;
    return divCheckIn;
}