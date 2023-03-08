function validar() {
    const email = "netmonstro@gmail.com";
    const password = "13101989";

    if (
        email === document.forms["login"]["email"].value &&
        password === document.forms["login"]["password"].value
    ) {
        alert("Login Valido");
        return true;
    } else {
        alert("Login Invalido");
        return false;
    }
}
