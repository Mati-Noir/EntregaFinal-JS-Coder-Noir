const nombre = document.getElementById("name")
const email = document.getElementById("Email")
const textoMensaje = document.getElementById("mensaje")
const formulario = document.getElementById("formulario")
const Aviso = document.getElementById("MensajeError")

formulario.addEventListener("submit", enviar=>{
    enviar.preventDefault()
    let MensajeError = ""
    let entrar = false
    let ValidarEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    Aviso.innerHTML = ""
    if(nombre.value.length <3){
        MensajeError += `El nombre no es valido <br>`
        entrar = true
    }
    if(!ValidarEmail.test(email.value)){
        MensajeError += `El email no es valido <br>`
        entrar = true
    }
    if(textoMensaje.value.length < 8){
        MensajeError += `La mensaje no es valido, desarrolle... <br>`
        entrar = true
    }

    if(entrar){
        Aviso.innerHTML = MensajeError
    }else{
        Aviso.innerHTML = "Mensaje Enviado"
    }
})

// Fuente de la forma de validacion del mail
// https://www.w3resource.com/javascript/form/email-validation.php
// Siendo la idea de poder aplicar multiples condiciones en un solo lugar.