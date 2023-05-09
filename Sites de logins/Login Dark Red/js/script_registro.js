let popup = document.querySelector('#popup');
let clos = document.querySelector('#clos');
let registro = document.querySelector('#registro');
let toast = document.querySelector('#toast');

function toastClose(){
toast.classList.remove('active');
}

function closePopup() {
    popup.classList.remove('open');
}
clos.onclick = closePopup;

function registroPopup() {
    popup.classList.add('open');
    
}



function registrar() {
    if (document.login.usuario.value == '') {
        document.querySelector('#result').innerHTML = 'Digite o Usuario';
        return false;
    }
    if (document.login.usuario.value.length < 6) {
        document.querySelector('#result').innerHTML = 'Mínimo 6 Digito';
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
    if (document.login.password.value.length < 6) {
        document.querySelector('#result').innerHTML = 'Mínimo 6 Digito';
        return false;
    }
    if (document.login.cpassword.value == '') {
        document.querySelector('#result').innerHTML = 'Confirme a senha';
        return false;
    }
    if (document.login.cpassword.value !== document.login.password.value) {
        document.querySelector('#result').innerHTML = 'Senha diferente';
        return false;
    }
    if (document.login.password.value == document.login.cpassword.value) {
        popup.classList.add('open');
        toast.classList.add('active');
        setTimeout(toastClose, 3000);
        return false;
    }
}
