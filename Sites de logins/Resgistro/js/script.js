function validar() {
    if (document.login.user.value == "") {
        document.getElementById("result").innerHTML = "Enter Username";
        return false;
    }
    if (document.login.user.value.length < 6) {
        document.getElementById("result").innerHTML = "enter 6 digits minimum";
        return false;
    }
    if (document.login.email.value == "") {
        document.getElementById("result").innerHTML = "Enter Email";
        return false;
    }
    if (document.login.password.value == "") {
        document.getElementById("result").innerHTML = "Enter Password";
        return false;
    }
    if (document.login.password.value.length < 6) {
        document.getElementById("result").innerHTML = "Enter 6 digits minimum";
        return false;
    }
    if (document.login.cpassword.value == "") {
        document.getElementById("result").innerHTML =
            "Enter password confirmation";
        return false;
    }
    if (document.login.password.value !== document.login.cpassword.value) {
        document.getElementById("result").innerHTML = "Different password";
        return false;
    }
    if (document.login.password.value == document.login.cpassword.value) {
        popup.classList.add("open-slide");
        return false;
    }
}

const popup = document.getElementById("popup");
function closeSlide() {
    popup.classList.remove("open-slide");
}
