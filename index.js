// Array de los productos:

const productos = [
  {
    id: 1,
    producto: "Disco Solido Kingston 240gb",
    precio: 8000,
    descripcion:
      "Disco Solido marca Kingston de una capacidad de almacenamiento de 240gb, apto para notebooks como para computadoras de escritorio.",
    categoria: "Discos de almacenamiento",
    oferta: false,
  },
  {
    id: 2,
    producto: "Disco Solido Kingston 480gb",
    precio: 15000,
    descripcion:
      "Disco Solido marca Kingston de una capacidad de almacenamiento de 480gb, apto para notebooks como para computadoras de escritorio con una incrementada capacidad de almacenamiento.",
    categoria: "Discos de almacenamiento",
    oferta: false,
  },
  {
    id: 3,
    producto: "Disco Solido Kingston 960gb",
    precio: 24000,
    descripcion:
      "Disco Solido marca Kingston de una capacidad de almacenamiento de 960gb, apto para notebooks como para computadoras de escritorio con un incremento drastico de la capacidad de almacenamiento, capaz de poder correr a gran velocidad hasta los juegos mas demandantes.",
    categoria: "Discos de almacenamiento",
    oferta: true,
  },
  {
    id: 4,
    producto: "Disco Duro Western Digital Blue 1tb",
    precio: 10000,
    descripcion:
      "Disco duro marca Western Digital de una capacidad de almacenamiento de 1tb, apto para DVR como para computadoras de escritorio",
    categoria: "Discos de almacenamiento",
    oferta: false,
  },
  {
    id: 5,
    producto: "Disco Solido Western Digital Blue 2tb",
    precio: 17000,
    descripcion:
      "Disco duro marca Western Digital de una capacidad incrementada de almacenamiento de 2tb, apto para DVR como para computadoras de escritorio",
    categoria: "Discos de almacenamiento",
    oferta: true,
  },
  {
    id: 6,
    producto: "Disco Solido Western Digital Purple 4tb",
    precio: 30000,
    descripcion:
      "Disco duro marca Western Digital de una capacidad enorme de almacenamiento de 4tb, apto para DVR como para computadoras de escritorio",
    categoria: "Discos de almacenamiento",
    oferta: true,
  },
  {
    id: 7,
    producto: "Memoria RAM Corsair Vengeance LPX black 8gb",
    precio: 14000,
    descripcion:
      "Memoria RAM marca Corsair de 8gb de tipo DDR4 de la linea Vengeance LPX.",
    categoria: "Memorias RAM",
    oferta: false,
  },
  {
    id: 8,
    producto: "Memoria RAM Corsair Vengeance LPX black 16gb",
    precio: 30000,
    descripcion:
      "Memoria RAM marca Corsair de 16gb de tipo DDR4 de la linea Vengeance LPX.",
    categoria: "Memorias RAM",
    oferta: true,
  },
  {
    id: 9,
    producto: "Memoria RAM Corsair Vengeance LPX black 32gb",
    precio: 45000,
    descripcion:
      "Memoria RAM marca Corsair de 32gb de tipo DDR4 de la linea Vengeance LPX.",
    categoria: "Memorias RAM",
    oferta: true,
  },
  {
    id: 10,
    producto:
      "Placa de video Nvidia ASUS TUF Gaming GeForce GTX 16 Series 1650 OC Edition 4gb",
    precio: 100000,
    descripcion:
      "Placa de video Nvidia TUF Gaming GeForce GTX 16 Series 1650 OC Edition 4gb, consume una potencia 300W, recomendado utilizar una fuente de poder de 700w o superior.",
    categoria: "Placas de video",
    oferta: false,
  },
  {
    id: 11,
    producto: "Placa de video Nvidia Palit Dual GeForce RTX 2060 8gb",
    precio: 130000,
    descripcion:
      "Placa de video Nvidia Palit Dual GeForce RTX 20 Series 2060 8gb, requiere una potencia minima de 550w, recomendado utilizar una fuente de poder de 800w o superior.",
    categoria: "Placas de video",
    oferta: true,
  },
  {
    id: 12,
    producto:
      "Placa de video Nvidia Zotac Gaming GeForce RTX 30 Series 3080 Ti 12gb",
    precio: 260000,
    descripcion:
      "Placa de video Nvidia Zotac Gaming GeForce RTX 30 Series 3080 12gb, requiere una potencia minisma de 750w, recomendado utilizar una fuente de poder de 850w o superior.",
    categoria: "Placas de video",
    oferta: false,
  },
  {
    id: 13,
    producto: "Fuente de Poder Thermaltake Smart White 700w 80 plus",
    precio: 31000,
    descripcion:
      "Fuente de poder Thermaltake de 700w, ideal para soportar las placas de video intermedias series 16.",
    categoria: "Fuentes de Poder",
    oferta: false,
  },
  {
    id: 14,
    producto: "Fuente de Poder Redragon 800w Full modular 80 plus Bronce",
    precio: 50000,
    descripcion:
      "Fuente de poder Redragon de 800w, ideal para soportar las placas de video superiores series 20.",
    categoria: "Fuentes de Poder",
    oferta: true,
  },
  {
    id: 15,
    producto: "Fuente de Poder Redgragon modular 850w 80 plus Gold",
    precio: 55000,
    descripcion:
      "Fuente de poder Thermaltake de 850w, ideal para soportar las placas de video mas imponentes dentro de la series 30.",
    categoria: "Fuentes de Poder",
    oferta: true,
  },
];

// --------------------------------------------------------------
// Sector verificacion de ofertas

/* function ConsultarOfertas(confirmacion) {
    confirmacion = confirm("Desea ver los productos que se encuentran con ofertas actualmente disponibles en la tienda? ")
    if (confirmacion === true) {
        verificarOfertas = productos.filter((producto) => producto.oferta === true);
        console.log(verificarOfertas)
    }
    
} */

// faltaria poder aplicar un descuento sobre el precio del producto, que no lo estaria logrando hacer por medio de funciones.

// --------------------------------------------------------------
// Sector Mostrar todos los productos del array

function MostrarProductos(confirmacion2) {
  confirmacion2 = confirm("Desea ver los productos disponibles en la tienda? ");
  if (confirmacion2 === true) {
    document.write("Productos Disponibles en stock: <br>");
    todosLosProductos = productos.map(
      (losProductos) =>
        losProductos.id +
        ") " +
        losProductos.producto +
        ": " +
        losProductos.precio +
        "$"
    );
    console.log(todosLosProductos.join("\n - "));
    document.write(todosLosProductos.join("<br> - "));
  }
}

// -------------------------------------------------
// Sector de pregunta de compra + Mostrar los productos si desea el usuario

function preguntaDeCompra(confirmacionDeCompra) {
  confirmacionDeCompra = confirm(
    "Desea adquirir alguno de los productos disponibles?"
  );
  if (confirmacionDeCompra === true) {
    MostrarProductos();
  } else {
    alert("Gracias por visitarnos, hasta luego.");
  }
}

preguntaDeCompra();

/* ConsultarOfertas() */

// --------------------------------------------------------------
// Sector busqueda de un producto en particular

let buscandoProducto = Number(
  prompt(
    "De los productos que se encuentran actualmente en consola, cual de ellos desea saber en detalle? Recuerde escribir el numero de producto de la lista actual."
  )
);

const busqueda = productos.find((producto) => producto.id === buscandoProducto);
console.log(busqueda);

// --------------------------------------------------------------
// Sector de carrito y compra

let seleccionarCantidad;
let total = 0;

alert(
  "ingrese el numero de id del producto que desea llevar, para salir ingrese 0"
);
let seleccionarProductos = Number(
  prompt(
    "En la consola se encuentra la lista si le ha dado ok para ver el listado, recuerde que es del 1 al 15."
  )
);

while (seleccionarProductos != 0) {
  switch (seleccionarProductos) {
    case 1:
      seleccionarCantidad = Number(
        prompt(
          "Has seleccionado disco solido de 240gb, ahora indique la cantidad que necesita:"
        )
      );
      total += cantidad(seleccionarCantidad, 8000);
      break;
    case 2:
      seleccionarCantidad = Number(
        prompt(
          "Has seleccionado disco solido de 480gb, ahora indique la cantidad que necesita:"
        )
      );
      total += cantidad(seleccionarCantidad, 15000);
      break;
    case 3:
      seleccionarCantidad = Number(
        prompt(
          "Has seleccionado disco solido de 960gb, ahora indique la cantidad que necesita:"
        )
      );
      total += cantidad(seleccionarCantidad, 24000);
      break;
    case 4:
      seleccionarCantidad = Number(
        prompt(
          "Has seleccionado disco duro WD Blue de 1tb, ahora indique la cantidad que necesita:"
        )
      );
      total += cantidad(seleccionarCantidad, 10000);
      break;
    case 5:
      seleccionarCantidad = Number(
        prompt(
          "Has seleccionado disco duro WD Blue de 2tb, ahora indique la cantidad que necesita:"
        )
      );
      total += cantidad(seleccionarCantidad, 17000);
      break;
    case 6:
      seleccionarCantidad = Number(
        prompt(
          "Has seleccionado disco duro WD Purple de 4tb, ahora indique la cantidad que necesita:"
        )
      );
      total += cantidad(seleccionarCantidad, 30000);
      break;
    case 7:
      seleccionarCantidad = Number(
        prompt(
          "Has seleccionado Memoria Ram Corsair Vengeance 8gb, ahora indique la cantidad que necesita:"
        )
      );
      total += cantidad(seleccionarCantidad, 14000);
      break;
    case 8:
      seleccionarCantidad = Number(
        prompt(
          "Has seleccionado Memoria Ram Corsair Vengeance 16gb, ahora indique la cantidad que necesita:"
        )
      );
      total += cantidad(seleccionarCantidad, 30000);
      break;
    case 9:
      seleccionarCantidad = Number(
        prompt(
          "Has seleccionado Memoria Ram Corsair Vengeance 32gb, ahora indique la cantidad que necesita:"
        )
      );
      total += cantidad(seleccionarCantidad, 45000);
      break;
    case 10:
      seleccionarCantidad = Number(
        prompt(
          "Has seleccionado Placa de video Nvidia ASUS TUF Gaming GeForce GTX 16 Series 1650 OC Edition 4gb, ahora indique la cantidad que necesita:"
        )
      );
      total += cantidad(seleccionarCantidad, 100000);
      break;
    case 11:
      seleccionarCantidad = Number(
        prompt(
          "Has seleccionado Placa de video Nvidia Palit Dual GeForce RTX 2060 8gb, ahora indique la cantidad que necesita:"
        )
      );
      total += cantidad(seleccionarCantidad, 130000);
      break;
    case 12:
      seleccionarCantidad = Number(
        prompt(
          "Has seleccionado Placa de video Nvidia Zotac Gaming GeForce RTX 30 Series 3080 Ti 12gb, ahora indique la cantidad que necesita:"
        )
      );
      total += cantidad(seleccionarCantidad, 260000);
      break;
    case 13:
      seleccionarCantidad = Number(
        prompt(
          "Has seleccionado Fuente de Poder Thermaltake Smart White 700w 80 plus, ahora indique la cantidad que necesita:"
        )
      );
      total += cantidad(seleccionarCantidad, 31000);
      break;
    case 14:
      seleccionarCantidad = Number(
        prompt(
          "Has seleccionado Fuente de Poder Redragon 800w Full modular 80 plus Bronce, ahora indique la cantidad que necesita:"
        )
      );
      total += cantidad(seleccionarCantidad, 50000);
      break;
    case 15:
      seleccionarCantidad = Number(
        prompt(
          "Has seleccionado Fuente de Poder Redragon 800w Full modular 80 plus Bronce, ahora indique la cantidad que necesita:"
        )
      );
      total += cantidad(seleccionarCantidad, 50000);
      break;

    default:
      break;
  }
  seleccionarProductos = Number(
    prompt(
      "En la consola se encuentra la lista si le ha dado ok para ver el listado, recuerde que es del 1 al 15. Si desea terminar, escriba 0."
    )
  );
}

alert(`El total del carrito es de: ${total}.`);
console.log(`El total del carrito es de: ${total}.`);
document.write(`<br>El total del carrito es de: ${total}.`);

function cantidad(cantidades, precio) {
  return cantidades * precio;
}

// --------------------------------------------------------------
// Sector de cuotas

let PorcentajeRecargoTresCuotas = 1.1;
let totalEn3Cuotas = Math.round(total * PorcentajeRecargoTresCuotas);

function RecargoTresCuotas(consultaCuotas3) {
  consultaCuotas3 = confirm(
    "Desea pagarlo en 3 cuotas (con recargo del 10%) o desea pagarlo al contado?"
  );
  if (consultaCuotas3 === true) {
    totalEn3Cuotas = total * PorcentajeRecargoTresCuotas;
    console.log(
      `El total en el caso de pagarlo en 3 cuotas es de: ${Math.round(
        totalEn3Cuotas
      )}`
    );
    document.write(
      `<br>El total en el caso de pagarlo en 3 cuotas es de: ${Math.round(
        totalEn3Cuotas
      )}`
    );
  } else {
    console.log(
      `Has seleccionado en no pagar en cuotas, el total del carrito sigue siendo de: ${total} `
    );
  }
}

RecargoTresCuotas();

// --------------------------------------------------------------
// Sector de tarifa del envio

let envio = 1000;
let totalConEnvio = total + envio;
let totalCon3CuotasYEnvio = totalEn3Cuotas + envio;

function envios(consultaEnvio) {
  consultaEnvio = confirm(
    "Desea recibirlo a traves del envio a domicilio o retirarlo en persona al local?"
  );
  if (consultaEnvio === true) {
    totalConEnvio = total + envio;
    console.log(
      `El total de la compra al contado con el envio a domicilio es de: ${totalConEnvio}.`
    );
    document.write(
      `<br>El total de la compra al contado con el envio a domicilio es de: ${Math.round(
        totalConEnvio
      )} pesos argentinos`
    );
    totalCon3CuotasYEnvio = totalEn3Cuotas + envio;
    console.log(
      `En el caso de querer pagar en 3 cuotas y sumar el envio, seria un total de: ${Math.round(
        totalCon3CuotasYEnvio
      )}.`
    );
  } else {
    console.log("Se retira en persona al local");
    document.write(
      `<br> Se retira en persona al local, el total de la compra es de: ${total} pesos argentinos.`
    );
  }
}
envios();
