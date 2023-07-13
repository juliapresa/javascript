let miNombre = 'Julia'
localStorage.setItem ('nombre', miNombre)

const nombreObtenido = localStorage.getItem ('nombre')
console.log (nombreObtenido)

//JSON

/*class producto{
    nombre;
    precio;
  
    constructor (nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
        
    }
}

const producto1 = new producto ('Marcador', 15)
const producto2 = new producto ('Lapicera', 10)
const producto3 = new producto ('Lapiz', 5)
const producto4 = new producto ('Goma', 2)

const producto1JSON = JSON.stringify(producto1)

const stringProducto = localStorage.getItem('item', producto1JSON)

const miProductoJavascript = JSON.parse (stringProducto)

console.log (miProductoJavascript)*/
class producto {
    nombre;
    precio;
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}
let carrito = [
    new producto('Marcador', 15),
    new producto('Lapicera', 10),
    new producto('Lápiz', 5),
    new producto('Goma', 2)
]

localStorage.setItem('carrito', JSON.stringify(carrito))

const getCarrito = JSON.parse(localStorage.getItem('carrito'))
console.log (getCarrito)