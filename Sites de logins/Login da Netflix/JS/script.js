function validar() {
    var user = "netmonstro@gmail.com";
    var pass = "13101989";
    if (
        user === document.forms["login"]["usuario"].value &&
        pass === document.forms["login"]["senha"].value
    ) {
        alert("Login Valido");
        return true;
    } else {
        alert("Login invalido");
        return false;
    }
}
