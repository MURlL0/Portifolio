function validar() {
  const userValue = document.login.user.value;
  const emailValue = document.login.email.value;
  const passwordValue = document.login.password.value;
  const cpasswordValue = document.login.cpassword.value;

  document.getElementById('result').innerHTML =
    userValue === ''
      ? 'Enter Username'
      : userValue.length < 6
      ? 'Enter at least 6 characters for username'
      : emailValue === ''
      ? 'Enter Email'
      : passwordValue === ''
      ? 'Enter Password'
      : passwordValue.length < 6
      ? 'Enter at least 6 characters for password'
      : cpasswordValue === ''
      ? 'Enter password confirmation'
      : passwordValue !== cpasswordValue
      ? 'Passwords do not match'
      : '';

  if (document.getElementById('result').innerHTML !== '') {
    return false;
  }

  const popup = document.getElementById('popup');
  popup.classList.add('open-slide');
  return false;
}

function closeSlide() {
  const popup = document.getElementById('popup');
  popup.classList.remove('open-slide');
  window.open('../login-future/html/login.html');
}
