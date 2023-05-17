var nombre = document.getElementById("name");
var email = document.getElementById("email");
var mensaje = document.getElementById("mensaje");

function enviarformulario(){
    console.log("enviando formulario ...")
    var mensajeError = [];

    if(nombre.value === null || nombre.value === ""){
        mensajeError.push("ingresa tu nombre");

    if(email.value === null || email.value === ""){
        mensajeError.push("ingresa tu email");     
    }
    error.innerHTML = mensajeError.join(', ');

    return false;
}