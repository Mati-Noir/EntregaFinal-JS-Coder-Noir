// boton desplegable del navbar

const navbarDesplegable =
  document.getElementsByClassName("navbar_desplegable")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

navbarDesplegable.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

// listado de productos

const productos = [
  {
    id: 1,
    nombre: "Disco Solido Kingston 240gb",
    precio: 8000,
    descripcion:
      "Disco Solido marca Kingston de una capacidad de almacenamiento de 240gb, apto para notebooks como para computadoras de escritorio.",
    categoria: "Discos de almacenamiento",
    oferta: false,
    img: "https://logg.api.cygnus.market/static/logg/Global/Disco%20S%C3%B3lido%20SSD%20Kingston%20A400%20240GB%20SATA%202.5%22/61841aa46a5e4fd3aed964a16601e39f.webp",
    cantidad: 1,
  },
  {
    id: 2,
    nombre: "Disco Solido Kingston 480gb",
    precio: 15000,
    descripcion:
      "Disco Solido marca Kingston de una capacidad de almacenamiento de 480gb, apto para notebooks como para computadoras de escritorio con una incrementada capacidad de almacenamiento.",
    categoria: "Discos de almacenamiento",
    oferta: false,
    img: "https://logg.api.cygnus.market/static/logg/Global/Disco%20S%C3%B3lido%20SSD%20Kingston%20A400%20480GB%20SATA%202.5%22/9c91fe32f2a74cd1924e757864de04fb.webp",
    cantidad: 1,
  },
  {
    id: 3,
    nombre: "Disco Solido Kingston 960gb",
    precio: 24000,
    descripcion:
      "Disco Solido marca Kingston de una capacidad de almacenamiento de 960gb, apto para notebooks como para computadoras de escritorio con un incremento drastico de la capacidad de almacenamiento, capaz de poder correr a gran velocidad hasta los juegos mas demandantes.",
    categoria: "Discos de almacenamiento",
    oferta: true,
    img: "https://app.contabilium.com/files/explorer/16277/Productos-Servicios/concepto-5551159.png",
    cantidad: 1,
  },
  {
    id: 4,
    nombre: "Disco Duro Western Digital Blue 1tb",
    precio: 10000,
    descripcion:
      "Disco duro marca Western Digital de una capacidad de almacenamiento de 1tb, apto para DVR como para computadoras de escritorio",
    categoria: "Discos de almacenamiento",
    oferta: false,
    img: "https://romitech.com.gt/web/image/product.template/560/image_256",
    cantidad: 1,
  },
  {
    id: 5,
    nombre: "Disco Solido Western Digital Blue 2tb",
    precio: 17000,
    descripcion:
      "Disco duro marca Western Digital de una capacidad incrementada de almacenamiento de 2tb, apto para DVR como para computadoras de escritorio",
    categoria: "Discos de almacenamiento",
    oferta: true,
    img: "https://plataforma.iduo.com.ar/Panelcontenidos/Contenidos/Hdd-disco-rigido-western-digital-2tb-sata-blue-1661876943-0-0.png",
    cantidad: 1,
  },
  {
    id: 6,
    nombre: "Disco Solido Western Digital Purple 4tb",
    precio: 30000,
    descripcion:
      "Disco duro marca Western Digital de una capacidad enorme de almacenamiento de 4tb, apto para DVR como para computadoras de escritorio",
    categoria: "Discos de almacenamiento",
    oferta: true,
    img: "https://logg.api.cygnus.market/static/logg/Global/Disco%20Duro%20HDD%204TB%20Western%20Digital%20Purple%20Sata3/d4fa63510a174e0fb08ff63161e2fc40.png",
    cantidad: 1,
  },
  {
    id: 7,
    nombre: "Memoria RAM Corsair Vengeance LPX black 8gb",
    precio: 14000,
    descripcion:
      "Memoria RAM marca Corsair de 8gb de tipo DDR4 de la linea Vengeance LPX.",
    categoria: "Memorias RAM",
    oferta: false,
    img: "https://www.invidcomputers.com/images/000000000041056567907-CMK8GX4M1A2666C16-Gallery-VENG-LPX-BLK-01.png",
    cantidad: 1,
  },
  {
    id: 8,
    nombre: "Memoria RAM Corsair Vengeance Pro RGB Black 16gb",
    precio: 30000,
    descripcion:
      "Memoria RAM marca Corsair de 16gb de tipo DDR4 de la linea Vengeance LPX.",
    categoria: "Memorias RAM",
    oferta: true,
    img: "https://www.rhaegon.com.ar//wp-content/uploads/2021/11/Corsair-Vengeance-RGB-PRO-8GB-3200Mhz-500x500.png",
    cantidad: 1,
  },
  {
    id: 9,
    nombre:
      "Memorias RAM DIMM DDR4 16 GB (2x8GB) Corsair Vengeance RGB Pro 3200 Mhz Blancas",
    precio: 45000,
    descripcion:
      "Kit de 2 Memorias RAM DIMM DDR4 16 GB (2x8GB) Corsair Vengeance RGB Pro 3200 Mhz Blancas.",
    categoria: "Memorias RAM",
    oferta: true,
    img: "https://www.invidcomputers.com/images/0000000000412624000114534-CMW16GX4M2C3200C16W-Gallery-Vegeance-RGB-PRO-WHT-04-2up.webp",
    cantidad: 1,
  },
  {
    id: 10,
    nombre:
      "Placa de video Nvidia ASUS TUF Gaming GeForce GTX 16 Series 1650 OC Edition 4gb",
    precio: 100000,
    descripcion:
      "Placa de video Nvidia TUF Gaming GeForce GTX 16 Series 1650 OC Edition 4gb, consume una potencia 300W, recomendado utilizar una fuente de poder de 700w o superior.",
    categoria: "Placas de video",
    oferta: false,
    img: "https://www.asus.com/media/global/products/hx9ylvjn9oopchgh/P_setting_xxx_0_90_end_692.png",
    cantidad: 1,
  },
  {
    id: 11,
    nombre: "Placa de video Nvidia Palit Dual GeForce RTX 2060 8gb",
    precio: 130000,
    descripcion:
      "Placa de video Nvidia Palit Dual GeForce RTX 20 Series 2060 8gb, requiere una potencia minima de 550w, recomendado utilizar una fuente de poder de 800w o superior.",
    categoria: "Placas de video",
    oferta: true,
    img: "https://logg.api.cygnus.market/static/logg/Global/Placa%20de%20Video%20Palit%20NVIDIA%20GeForce%20RTX%202060%20SUPER%20DUAL%208GB%20GDDR6%20PCIe%203.0/fdb3bee8af1e44a6b08202b668cc0b36.webp",
    cantidad: 1,
  },
  {
    id: 12,
    nombre:
      "Placa de video Nvidia Zotac Gaming GeForce RTX 30 Series 3080 Ti 12gb",
    precio: 260000,
    descripcion:
      "Placa de video Nvidia Zotac Gaming GeForce RTX 30 Series 3080 12gb, requiere una potencia minisma de 750w, recomendado utilizar una fuente de poder de 850w o superior.",
    categoria: "Placas de video",
    oferta: false,
    img: "https://impomundo.com.ar/wp-content/uploads/2022/10/Perfil.png",
    cantidad: 1,
  },
  {
    id: 13,
    nombre: "Fuente de Poder Thermaltake Smart White 700w 80 plus",
    precio: 31000,
    descripcion:
      "Fuente de poder Thermaltake de 700w, ideal para soportar las placas de video intermedias series 16.",
    categoria: "Fuentes de Poder",
    oferta: false,
    img: "https://logg.api.cygnus.market/static/logg/Global/Fuente_Thermaltake_Smart_700W_80_White/7efddf24f59d44079bd3f1abc1fcdeb2.webp",
    cantidad: 1,
  },
  {
    id: 14,
    nombre: "Fuente de Poder Redragon 800w Full modular 80 plus Bronce",
    precio: 50000,
    descripcion:
      "Fuente de poder Redragon de 800w, ideal para soportar las placas de video superiores series 20.",
    categoria: "Fuentes de Poder",
    oferta: true,
    img: "https://redragon.es/content/uploads/2022/06/GC-PS011-MODULAR-800W.png",
    cantidad: 1,
  },
  {
    id: 15,
    nombre: "Fuente de poder Asus ROG Thor 850w RGB",
    precio: 55000,
    descripcion:
      "ASUS - Fuente de alimentación RGB, ROG Thor 850, totalmente modular, 850 W con panel OLED LiveDash",
    categoria: "Fuentes de Poder",
    oferta: true,
    img: "https://dlcdnwebimgs.asus.com/gain/1630FF2A-79C8-44BE-9083-FB857ABD9AE7/w717/h525",
    cantidad: 1,
  },
];

let carrito = [];

// ---------------------------------------------------------------------------
// variables generales

const contenedor = document.querySelector("#contenedor");
const carritoContenedor = document.querySelector("#carritoContenedor");
const vaciarCarrito = document.querySelector("#vaciarCarrito");
const precioTotal = document.querySelector("#precioTotal");
const activarFuncion = document.querySelector("#activarFuncion");
const procesarCompra = document.querySelector("#procesarCompra");
const totalProceso = document.querySelector("#totalProceso");
const formulario = document.querySelector('#procesar-pago')

// ---------------------------------------------------------------------------
// Funciones globales de activacion

if (activarFuncion) {
  activarFuncion.addEventListener("click", procesarPedido);
}

document.addEventListener("DOMContentLoaded", () => {
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  mostrarCarrito();
  document.querySelector("#activarFuncion").click(procesarPedido);
});
if(formulario){
  formulario.addEventListener('submit', enviarCompra)
}


if (vaciarCarrito) {
  vaciarCarrito.addEventListener("click", () => {
    carrito.length = [];
    mostrarCarrito();
    Toastify({
      text: "Carrito vaciado",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #E38822, #E34422)",
        borderRadius: "10px",
        textTransform: "uppercase",
      },
      onClick: function(){} // Callback after click
    }).showToast();
  });
}

if (procesarCompra) {
  procesarCompra.addEventListener("click", () => {
    if (carrito.length === 0) {
      Swal.fire({
        title: "Tu carrito no tiene nada",
        text: "Primero compra algo de la tienda y segundo Francia.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else {
      location.href = "../Paginas/Carrito.html";
    }
  });
}

// ---------------------------------------------------------------------------
// DOM de cada uno de los productos dentro del array productos

productos.forEach((prod) => {
  const { id, nombre, precio, descripcion, img, cantidad } = prod;
  if (contenedor) {
    contenedor.innerHTML += `
    <div class="card mt-3" style="width: 30rem;">
    <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text-precio">$ ${precio}</p>
      <p class="card-text-descripcion"> ${descripcion}</p>
      <p class="card-text-cantidad">Cantidad: ${cantidad}</p>
      <button class="btn btn-dark" onclick="agregarProducto(${id})">Comprar Producto</button>
    </div>
  </div>
    `;
  }
});

// ---------------------------------------------------------------------------
// Sector Agregar productos al carrito

const agregarProducto = (id) => {
  Toastify({
    text: "Agregado al carrito",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
      borderRadius: "10px",
      textTransform: "uppercase",
    },
    onClick: function(){} // Callback after click
  }).showToast();
  const existe = carrito.some(prod => prod.id === id)

  if(existe){
    const prod = carrito.map(prod => {
      if(prod.id === id){
        prod.cantidad++
      }
    })
  } else {
    const item = productos.find((prod) => prod.id === id)
    carrito.push(item)
  }
  mostrarCarrito()

};

// ---------------------------------------------------------------------------
// Sector mostrar productos dentro del carrito

const mostrarCarrito = () => {
  const modalBody = document.querySelector(".modal .modal-body");
  if (modalBody) {
    modalBody.innerHTML = "";
    carrito.forEach((prod) => {
      const { id, nombre, precio, img, cantidad } = prod;
      console.log(modalBody);
      modalBody.innerHTML += `
      <div class="modal-contenedor">
        <div>
          <img class="img-fluid img-carrito" src="${img}"/>
        </div>
        <div>
          <p class="nombre-producto-modal">Producto: ${nombre}</p>
          <p class="precio-producto-modal">Precio: $${precio}</p>
          <p class="cantidad-producto-modal">Cantidad : ${cantidad}</p>
          <button class="btn btn-danger"  onclick="eliminarProducto(${id})">Eliminar producto</button>
        </div>
      </div>
      `;
    });
  }

  if (carrito.length === 0) {
    console.log("Nada");
    modalBody.innerHTML = `
    <p class="text-center text-primary parrafo">No hay nada por aca...</p>
    `;
  } else {
    console.log("Algo");
  }
  carritoContenedor.textContent = carrito.length;

  if (precioTotal) {
    precioTotal.innerText = carrito.reduce(
      (acc, prod) => acc + prod.cantidad * prod.precio,
      0
    );
  }

  guardarStorage();
};

// ---------------------------------------------------------------------------
// carga de datos al localStorage

function guardarStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// ---------------------------------------------------------------------------
// Sector eliminar productos del carrito

function eliminarProducto(id) {
  Toastify({
    text: "Producto eliminado",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #E38822, #E34422)",
      borderRadius: "10px",
      textTransform: "uppercase",
    },
    onClick: function(){} // Callback after click
  }).showToast();
  const productoId = id;
  carrito = carrito.filter((producto) => producto.id !== productoId);
  mostrarCarrito();
}

// ---------------------------------------------------------------------------
// Sector procesar la lista de compra dentro de carrito.html

function procesarPedido() {
  carrito.forEach((prod) => {
    const listaCompra = document.querySelector("#lista-compra tbody");
    const { id, nombre, precio, img, cantidad } = prod;
    if (listaCompra) {
      const row = document.createElement("tr");
      row.innerHTML += `
              <td>
              <img class="img-fluid img-carrito" src="${img}"/>
              </td>
              <td>${nombre}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>${precio * cantidad}</td>
            `;
      listaCompra.appendChild(row);
    }
  });
  totalProceso.innerText = carrito.reduce(
    (acc, prod) => acc + prod.cantidad * prod.precio,
    0
  );
}

// ---------------------------------------------------------------------------
// Sector notificacion de compra al mail - sweet alert error - spinner de carga

 function enviarCompra(e){
   e.preventDefault()
   const cliente = document.querySelector('#cliente').value
   const email = document.querySelector('#correo').value

   if(email === '' || cliente == ''){
     Swal.fire({
       title: "Necesitamos un nombre y un mail para la compra",
       text: "Primero rellena el formulario y segundo Francia",
       icon: "error",
       confirmButtonText: "Aceptar",
   })
 } else {

  const btn = document.getElementById('button');

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_qxwi0jn';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Finalizar compra';
      alert('Correo enviado!');
    }, (err) => {
      btn.value = 'Finalizar compra';
      alert(JSON.stringify(err));
    });
    
   const spinner = document.querySelector('#spinner')
   spinner.classList.add('d-flex')
   spinner.classList.remove('d-none')

   setTimeout(() => {
     spinner.classList.remove('d-flex')
     spinner.classList.add('d-none')
     formulario.reset()

     const alertExito = document.createElement('p')
     alertExito.classList.add('alert', 'alerta', 'd-block', 'text-center', 'col-12', 'mt-2', 'alert-success')
     alertExito.textContent = 'Compra realizada correctamente'
     formulario.appendChild(alertExito)

     setTimeout(() => {
       alertExito.remove()
     }, 3000)


   }, 3000)
 }
 localStorage.clear()

 }