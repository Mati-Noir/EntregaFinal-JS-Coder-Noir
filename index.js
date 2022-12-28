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
    img: "https://www.pccompu.com.uy/imgs/productos/productos31_19629.jpg",
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
    img: "https://http2.mlstatic.com/D_NQ_NP_932901-MLA49736248519_042022-V.jpg",
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
    img: "https://www.toptecnouy.com/imgs/productos/productos31_32701.jpg",
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
    img: "https://omnitechperu.com/data/cache/thum_21256hdiwd20ezbx.jpg",
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
    img: "https://www.computerssalejalapa.com/web/image/product.template/3730/image_256/%5BWD42PURZ%2785B4YY0%5D%20Disco%20Duro%20Interno%20de%203.5%22%20de%204%20TB%20Western%20Digital%20Purple?unique=565094c",
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
    img: "https://cdn.awsli.com.br/1000x1000/404/404053/produto/47075080/d7328a19ad.jpg",
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
    img: "https://www.serialcenter.com.py/fotos/thumbs/1_memoria-ram-8gb-ddr4-3600mhz-corsair-vengeance-pro-rgb-2498.png",
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
    img: "https://www.computerssalejalapa.com/web/image/product.template/3050/image_256/%5BCMW16GX4M2C3200C16W%5D%20Kit%20de%202%20Memorias%20RAM%20DIMM%20DDR4%2016%20GB%20%282x8GB%29%20Corsair%20Vengeance%20RGB%20Pro%203200%20Mhz%20Blancas?unique=565094c",
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
    img: "https://m.media-amazon.com/images/I/61GlIFHq5pL._AC_SY355_.jpg",
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
    img: "https://sampler.com.uy/imgs/productos/productos31_75975.jpg",
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
    img: "https://http2.mlstatic.com/D_NQ_NP_697365-MLA50594077421_072022-O.jpg",
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
    img: "https://www.alltec.cl/5795-home_default/fuente-poder-thermaltake-smart-700w-80plus-white-spd-0700p.jpg",
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
    img: "https://mla-s1-p.mlstatic.com/619000-MLA49646839879_042022-F.jpg",
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
    img: "https://m.media-amazon.com/images/I/41RhiCJvX-L._AC_.jpg",
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