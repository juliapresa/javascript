alert ('Bienvenido a la papelería')

const carritoSinIva = [
    {nombre: 'Marcador', precio: 15},
    {nombre: 'Lapicera', precio: 10},
    {nombre: 'Lapiz', precio: 5},
    {nombre: 'Goma', precio: 2},
]
const carritoConIva = carritoSinIva.map ((producto) => {return {nombre: producto.nombre, precio: producto.precio+1.21}})
console.log (carritoSinIva)
console.log (carritoConIva)
carritoSinIva.indexOf ('')
let productos = ('')
for (const producto of carritoConIva){
    productos += producto.nombre + ' $' + producto.precio + '\n'
}
let nombre
let mail
let empezar = prompt ('Desea agregar productos al carrito? si/no')

if (empezar === "si"){
    nombre = prompt ('Ingrese su nombre: ')
    mail = prompt ('Ingrese su mail')
    alert ('Los productos disponibles son:\n' + productos)
    prompt ('Ingrese el producto que desea seleccionar:')
    prompt ('Ingrese la cantidad que desea del producto ingresado: ')
}else{
    alert ('Gracias igualmente!')
}
console.log ('Nombre ingresado: ' + nombre)
console.log ('Mail ingresado: ' + mail)
