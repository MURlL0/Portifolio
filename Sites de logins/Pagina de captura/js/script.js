function validar(){
  if (document.login.nome.value==""){
  document.getElementById("result").innerHTML="Digite seu nome";
  return false;
  }
  if (document.login.nome.value.length<6){
  document.getElementById("result").innerHTML="Mínimo de 6 Dígitos";
  return false;
  }
  if (document.login.email.value==""){
  document.getElementById("result").innerHTML="Digite seu E-mail";
  return false;
  }
}