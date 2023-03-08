function validar() {
    if (document.login.user.value == "") {
        document.getElementById("result").innerHTML = "Digite o Usuario";
        return false;
    }
    if (document.login.user.value.length < 6) {
        document.getElementById("result").innerHTML = "Mínimo de 6 caracteres";
        return false;
    }
    if (document.login.email.value == "") {
        document.getElementById("result").innerHTML = "Digite o Email";
        return false;
    }
    if (document.login.password.value == "") {
        document.getElementById("result").innerHTML = "Digite a Senha";
        return false;
    }
    if (document.login.password.value.length < 6) {
        document.getElementById("result").innerHTML =
            "Senha minima de 6 caracteres";
        return false;
    }
    if (document.login.cpassword.value == "") {
        document.getElementById("result").innerHTML = "Confirme a senha";
        return false;
    }
    if (document.login.password.value !== document.login.cpassword.value) {
        document.getElementById("result").innerHTML = "Senha diferente";
        return false;
    }
    if (document.login.password.value == document.login.cpassword.value) {
        popup.classList.add("open-slide");
        return false;
    }
}

const popup = document.getElementById("popup");
function CloseSlide() {
    popup.classList.remove("open-slide");
}
