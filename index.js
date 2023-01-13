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

const contenedorProductos = document.getElementById("contenedor-productos");
const contenedorCarrito = document.getElementById("carrito-contenedor");
const botonVaciar = document.getElementById("vaciar-carrito");

// ---------------------------------------------------------------------------
// DOM de cada uno de los productos dentro del array productos

productos.forEach((producto) => {
  const div = document.createElement("div");
  div.classList.add("producto");
  div.innerHTML = `
          <img src=${producto.img} alt= "">
          <h3>${producto.nombre}</h3>
          <p class="precioProducto">$ ${producto.precio}</p>
          <button id="agregar${producto.id}" class="boton-agregar">Agregar al carrito</button>
          `;
  contenedorProductos.appendChild(div);

  const boton = document.getElementById(`agregar${producto.id}`);

  boton.addEventListener("click", () => {
    agregarAlCarrito(producto.id);
  });
});

// ---------------------------------------------------------------------------
// Sector Agregar productos al carrito

const agregarAlCarrito = (prodId) => {
  const Productoexiste = carrito.some((prod) => prod.id === prodId);
  if (Productoexiste) {
    const prod = carrito.map((prod) => {
      if (prod.id === prodId) {
        prod.cantidad++;
      }
    });
  } else {
    const item = productos.find((prod) => prod.id === prodId);
    carrito.push(item);
  }
  actualizarCarrito();
};

// ---------------------------------------------------------------------------
// Sector eliminar productos del carrito

const eliminarDelCarrito = (prodId) => {
  const item = carrito.find((prod) => prod.id === prodId);
  const indice = carrito.indexOf(item);
  carrito.splice(indice, 1);
  actualizarCarrito();
  console.log(carrito);
};

botonVaciar.addEventListener("click", () => {
  carrito.length = 0;
  actualizarCarrito();
});

// ---------------------------------------------------------------------------
// Sector mostrar productos dentro del carrito

const actualizarCarrito = () => {
  contenedorCarrito.innerHTML = "";
  carrito.forEach((prod) => {
    const div = document.createElement("div");
    div.className = "productoEnCarrito";
    div.innerHTML = `
              <p>${prod.nombre}</p>
              <p>Precio:$${prod.precio}</p>
              <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
              <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
              `;

    contenedorCarrito.appendChild(div);

    localStorage.setItem("carrito", JSON.stringify(carrito));
  });

  contadorCarrito.innerText = carrito.length;
  console.log(carrito);
  precioTotal.innerText = carrito.reduce(
    (acc, prod) => acc + prod.cantidad * prod.precio,
    0
  );
};

const cantidad = document.getElementById("cantidad");
const precioTotal = document.getElementById("precioTotal");
const cantidadTotal = document.getElementById("cantidadTotal");
const contadorCarrito = document.getElementById("contadorCarrito");

// ---------------------------------------------------------------------------
// modal - popup del carrito

const contenedorModal = document.getElementsByClassName("modal-contenedor")[0];
const botonAbrir = document.getElementById("boton-carrito");
const botonCerrar = document.getElementById("carritoCerrar");
const modalCarrito = document.getElementsByClassName("modal-carrito")[0];

// ---------------------------------------------------------------------------
// eventos de los botones dentro y fuera del modal

botonAbrir.addEventListener("click", () => {
  contenedorModal.classList.toggle("modal-active");
});
botonCerrar.addEventListener("click", () => {
  contenedorModal.classList.toggle("modal-active");
});

contenedorModal.addEventListener("click", (event) => {
  contenedorModal.classList.toggle("modal-active");
});
modalCarrito.addEventListener("click", (event) => {
  event.stopPropagation();
});

// ---------------------------------------------------------------------------
// carga de datos al localStorage

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    actualizarCarrito();
  }
});

// ---------------------------------------------------------------------------
// Swiper Carousel Index

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});