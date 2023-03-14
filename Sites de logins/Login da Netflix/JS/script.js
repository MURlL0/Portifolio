function validar() {
    var email = "netmonstro@gmail.com";
    var pass = "13101989";

    if (
        email === document.forms["login"]["email"].value &&
        pass === document.forms["login"]["password"].value
    ) {
        alert("Login valido");
        return true;
    } else {
        alert("Login Invalido");
        return false;
    }
}
