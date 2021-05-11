export const recoverPassword = () => {
  const divRecoverPassword = document.createElement('div');
  const viewRecoverPassword =  `
    <div class='recoverpassword'>
        <div class='header'>
          <div class='logo'>
            <img src='img/logotipo.png' alt='logo' />
          </div>
          <div class='title'>
            <h1>ourist places</h1>
          </div>
          <div class='back'>
          <a id ='back1' class ='back'><img src='img/volver.png' alt='profile' /></a>
        </div>
        </div>
        <div class='recoverPassword<'>
          <div>
            <h2>Recover Password</h2>
          </div>
          <input
          type='email'
          name='email'
          class='login-email'
          placeholder='E-mail'
          />
        </div>
        <div class='passwordRecover'>
          <a class='sendpassword'><img src='img/envialo.png' alt='profile' /></a>
        </div>         
      </div> `;

  divRecoverPassword.innerHTML = viewRecoverPassword;
  const buttonBack1 = divRecoverPassword.querySelector('#back1');
  buttonBack1.addEventListener('click', e => {
  history.back();
});
  return divRecoverPassword;
};
