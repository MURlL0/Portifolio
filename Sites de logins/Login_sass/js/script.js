function validar() {
    if (document.login.usuario.value == '') {
        document.querySelector('#result').innerHTML = 'Digite o usuario';
        return false;
    }
    if (document.login.usuario.value.length <6) {
        document.querySelector('#result').innerHTML = 'Mínimo 6 dígitos';
        return false;
    }
    if (document.login.email.value == '') {
        document.querySelector('#result').innerHTML = 'Digite o Email';
        return false;
    }
    if (document.login.password.value == '') {
        document.querySelector('#result').innerHTML = 'Digite a senha';
        return false;
    }
    if (document.login.password.value.length <6) {
        document.querySelector('#result').innerHTML = 'Mínimo 6 dígitos';
        return false;
    }
    if (document.login.cpassword.value !== document.login.password.value) {
        document.querySelector('#result').innerHTML = 'Senha Diferente';
        return false;
    }
}
