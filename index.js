// Sector de eleccion de productos

alert("ingrese la opcion del producto que desea llevar, para salir ingrese 0")
let seleccionarProductos = Number(prompt("1-Disco solido Kingston 240gb- $8000 // 2-Disco Solido kingston 480gb- $15000 // 3-Disco Solido Kingston 960gb- $24000 "))
let seleccionarCantidad;
let total = 0

while(seleccionarProductos != 0) {
    switch(seleccionarProductos) {
        case 1:
            seleccionarCantidad = Number(prompt("Has seleccionado disco solido de 240gb, ahora indique la cantidad que necesita:"))
            total += cantidad(seleccionarCantidad, 8000)
            break;
        case 2:
            seleccionarCantidad = Number(prompt("Has seleccionado disco solido de 480gb, ahora indique la cantidad que necesita:"))
            total += cantidad(seleccionarCantidad, 15000)
            break;
        case 3:
            seleccionarCantidad = Number(prompt("Has seleccionado disco solido de 960gb, ahora indique la cantidad que necesita:"))
            total += cantidad(seleccionarCantidad, 24000)
            break;
        
        default:
            break;
    }
    seleccionarProductos = Number(prompt("1-Disco solido Kingston 240gb- $8000 // 2-Disco Solido kingston 480gb- $15000 // 3-Disco Solido Kingston 960gb- $24000 (si desea terminar, escriba 0)"))
}

alert(`El total del carrito es de: ${total}.`)
console.log(`El total del carrito es de: ${total}.`)
document.write(`El total del carrito es de: ${total}.`)

function cantidad(cantidades, precio) {
    return cantidades * precio
}

// Sector de cuotas

let consultaCuotas3 = prompt("Desea pagarlo en 3 cuotas (con recargo del 10%) o desea pagarlo al contado? Escriba si ,si quiere pagarlo en 3 cuotas")
let totalEn3Cuotas = total * 1.10

if (consultaCuotas3 === "si"){
    totalEn3Cuotas = total * 1.10
    console.log(`El total de pagarlo en 3 cuotas es de: ${totalEn3Cuotas}`)

} else {
    console.log(`Has seleccionado en no pagar en cuotas, el total del carrito sigue siendo de  ${total} `)

}

// Sector de tarifa del envio

let tresCuotas = (total * 1.10) / 3
let envio = 1000
let consultaEnvio = prompt("Desea recibirlo a traves del envio a domicilio o retirarlo en persona al local? Escriba 1 para la opcion del envio sin cuotas ; 2 para envio + pago en cuotas ; 3 sin envio + pago en cuotas ; 4 sin envio ni cuotas")
let totalCon3CuotasYEnvio = totalEn3Cuotas + envio
let totalCon3CuotasSinEnvio = totalEn3Cuotas

if (consultaEnvio == 1) {
    totalConEnvio = total + envio
    console.log(`El total de la compra al contado con el envio a domicilio es de: ${totalConEnvio} .`)
    document.write(`<br> Se envia a domicilio, el total de la compra al contado junto con el envio es de: ${totalConEnvio} .`)

} else if (consultaEnvio == 2) {
    totalCon3CuotasYEnvio = totalEn3Cuotas + envio
    tresCuotas = (total * 1.10) / 3
    console.log(`El precio final a abonar sumando el envio: ${totalCon3CuotasYEnvio} en 3 cuotas de ${tresCuotas} pesos argentinos + el envio de 1000 pesos.`)
    document.write(`<br> Se envia a domicilio, el total de la compra junto con el envio es de: ${totalCon3CuotasYEnvio} en 3 cuotas de: ${tresCuotas} pesos argentinos + el envio de 1000 pesos.`)

} else if (consultaEnvio == 3) {
    totalCon3CuotasSinEnvio = totalEn3Cuotas
    console.log(`El precio final a abonar: ${totalCon3CuotasSinEnvio} en 3 cuotas de ${tresCuotas} pesos argentinos.`)
    document.write(`<br> Se retira en persona al local, el total de la compra sin envio es: ${totalCon3CuotasSinEnvio} en 3 cuotas de: ${tresCuotas} pesos argentinos.`)

} else {
    console.log("Se retira en persona al local")
    document.write(`<br> Se retira en persona al local, el total de la compra es de: ${total} pesos argentinos.`)
}

document.write("<br> Muchas gracias por su compra, vuelva pronto!")
