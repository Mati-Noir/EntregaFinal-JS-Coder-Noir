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
        Swal.fire({
            title: 'Houston, tenemos un problema',
            text: 'Los datos introducidos no son validos.',
            imageUrl: 'https://i.pinimg.com/originals/50/6e/e2/506ee22b38ada4c5390498809fca404f.jpg',
            imageWidth: 400,
            imageHeight: 250,
            imageAlt: 'Custom image',
          })
    }else{
        Aviso.innerHTML = "Mensaje Enviado"
        Swal.fire({
            title: 'Exito',
            text: 'El formulario ha sido enviado.',
            imageUrl: 'https://media.tenor.com/y2JXkY1pXkwAAAAC/cat-computer.gif',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
    }
})

// Fuente de la forma de validacion del mail
// https://www.w3resource.com/javascript/form/email-validation.php
// Siendo la idea de poder aplicar multiples condiciones en un solo lugar.