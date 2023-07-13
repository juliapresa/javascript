class Producto {
    constructor(nombre, precio, precioSinIva) {
      this.nombre = nombre;
      this.precio = precio;
      this.precioSinIva = precioSinIva;
    }
  }
  
  const producto1 = new Producto('Marcador', 15, 15);
  const producto2 = new Producto('Lapicera', 10, 10);
  const producto3 = new Producto('Lapiz', 5, 5);
  const producto4 = new Producto('Goma', 2, 2);
  
  const carritoSinIva = [
    { nombre: 'Marcador', precio: 15, precioSinIva: 15 },
    { nombre: 'Lapicera', precio: 10, precioSinIva: 10 },
    { nombre: 'Lapiz', precio: 5, precioSinIva: 5 },
    { nombre: 'Goma', precio: 2, precioSinIva: 2 }
  ];
  
  let carritoConIva = carritoSinIva.map((producto) => {
    return { nombre: producto.nombre, precio: producto.precio + 1.21, precioSinIva: producto.precio };
  });
  
  let total = 0;
  let precioTotal = 0;
  let cantidadTotal = 0;
  let productosAgregados = [];
  
  function calculo(total, precio, cantidad) {
    const precioTotal = total + precio * cantidad;
    return precioTotal;
  }
  
  function armarTarjetas() {
    const tarjetas = document.getElementById('tarjeta');
    const tarjetaTemplate = tarjetas.querySelector('.tarjeta');
    tarjetas.innerHTML = "";
    carritoConIva.forEach((producto, index) => {
      const nuevaTarjeta = tarjetaTemplate.cloneNode(true);
      nuevaTarjeta.querySelector('.cardTitle').textContent = producto.nombre;
      nuevaTarjeta.querySelector('.cardPrecio').textContent = 'Precio: $' + producto.precioSinIva;
      const imagen = document.createElement('img');
      imagen.src = './assets/img/' + (index + 1) + '.jpg';
      nuevaTarjeta.querySelector('.cardBody').prepend(imagen);
      imagen.classList.add('cardImagen');
  
      tarjetas.appendChild(nuevaTarjeta);
  
      const botonAgregar = nuevaTarjeta.querySelector('.cardButton');
      const botonQuitar = nuevaTarjeta.querySelector('.cardButtonQuitar');
      const inputCantidad = nuevaTarjeta.querySelector('.cantidad');
      botonAgregar.addEventListener('click', function () {
        agregarAlCarrito(producto, inputCantidad.value);
      });
      botonQuitar.addEventListener('click', function () {
        quitarDelCarrito(producto);
      });
    });
  }
  
  function agregarAlCarrito(producto, cantidad) {
    cantidad = parseInt(cantidad);
    if (!isNaN(cantidad) && cantidad > 0) {
      productosAgregados.push(producto.nombre);
      cantidadTotal += cantidad;
      precioTotal = calculo(precioTotal, producto.precio, cantidad);
      actualizarPrecioPagar();
      actualizarCantidadProductos();
    } else {
      alert('La cantidad ingresada no es válida');
    }
  }

  function quitarDelCarrito(producto) {
    const index = productosAgregados.indexOf(producto.nombre);
    if (index > -1) {
      productosAgregados.splice(index, 1);
      cantidadTotal = cantidadTotal - 1;
      precioTotal = precioTotal - producto.precio;
      actualizarPrecioPagar();
      actualizarCantidadProductos();
    }
  }
  
  function actualizarPrecioPagar() {
    const precioPagarElement = document.getElementById('precioPagar');
    const totalPagarElement = precioPagarElement.querySelector('#totalPagar');
    totalPagarElement.textContent = '$' + precioTotal.toFixed(2);
  }
  
  function actualizarCantidadProductos() {
    const cantidadFinalElement = document.getElementById('cantidadFinal');
    cantidadFinalElement.textContent = 'CANTIDAD DE PRODUCTOS SELECCIONADOS: ' + cantidadTotal;
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    armarTarjetas();
  
    const botonCancelar = document.getElementById('botonCancelar');
    botonCancelar.addEventListener('click', function () {
      total = 0;
      precioTotal = 0;
      cantidadTotal = 0;
      productosAgregados = [];
      actualizarPrecioPagar();
      actualizarCantidadProductos();
      const inputCantidad = document.querySelectorAll('.cantidad');
      inputCantidad.forEach(function (input) {
        input.value = '';
      });
    });
  });
  
  



function llevarStorage() {
    localStorage.setItem('carrito', JSON.stringify(carritoConIva));
}

llevarStorage();

function traerStorage() {
    const getCarrito = JSON.parse(localStorage.getItem('carrito'));
    console.log(getCarrito);
}

traerStorage();

const botonCancelar = document.getElementById('botonCancelar');
botonCancelar.addEventListener('mousemove', function () {
    botonCancelar.style.color = 'red';
});
botonCancelar.addEventListener('mouseout', function () {
    botonCancelar.style.color = ''
});