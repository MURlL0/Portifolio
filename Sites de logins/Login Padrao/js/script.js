function validar() {
    const email = "netmonstro@gmail.com";
    const pass = "13101989";

    if (
        email === document.forms["login"]["email"].value &&
        pass === document.forms["login"]["password"].value
    ) {
        alert("Login Valido");
        return true;
    } else {
        alert("Login Invalido");
        return false;
    }
}
