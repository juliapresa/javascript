alert ('Bienvenido a la papelería')

class producto{
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
const carritoSinIva = [
    {nombre: 'Marcador', precio: 15},
    {nombre: 'Lapicera', precio: 10},
    {nombre: 'Lapiz', precio: 5},
    {nombre: 'Goma', precio: 2},
]
const carritoConIva = carritoSinIva.map ((producto) => {return {nombre: producto.nombre, precio: producto.precio+1.21}})
console.log (carritoSinIva)
console.log (carritoConIva)
const lista = carritoConIva.map ((producto, index) => `${index} ${producto.nombre} $${producto.precio}\n` )

let opcion;
let nombre
let mail
let total = 0
let precioTotal = 0
let agregar
let cantidad
let cantidadTotal = 0
let productosAgregados = [];
function calculo (total, precio, cantidad){
    precioTotal = total + precio*cantidad
    return precioTotal
}
let empezar = prompt ('Quiere empezar? si/no')

if (empezar === "si"){
    alert ('Agrega productos a tu carrito!');
    productosAgregados.push(producto.nombre);
    nombre = prompt ('Ingrese su nombre: ')
    mail = prompt ('Ingrese su mail')
    do{
        agregar = parseInt(prompt('Seleccione un producto a la vez: \n' + lista.join ('')))
        switch (agregar){
            case 0:
                cantidad = parseInt(prompt('Seleccione cantidad'))
                cantidadTotal += cantidad
                precioTotal = calculo (precioTotal, carritoConIva[0].precio, cantidad)
            break;
            case 1:
                cantidad = parseInt(prompt('Seleccione cantidad'))
                cantidadTotal += cantidad
                precioTotal = calculo (precioTotal, carritoConIva[1].precio, cantidad)
            break;
            case 2:
                cantidad = parseInt(prompt('Seleccione cantidad'))
                cantidadTotal += cantidad
                precioTotal = calculo (precioTotal, carritoConIva[2].precio, cantidad)
            break;
            case 3:
                cantidad = parseInt(prompt('Seleccione cantidad'))
                cantidadTotal += cantidad
                precioTotal = calculo (precioTotal, carritoConIva[3].precio, cantidad)
            break;
            default:
                alert ('Algo falló, seleccione nuevamente')
        }
        alert ('Item seleccionado')
        continuar = prompt ('Desea agegar otro item? si/listo')
        total = total + 0, 1, 2, 3;
    }while (continuar == 'si')
    alert ('Total de productos seleccionados: ' + cantidadTotal)
    if (productosAgregados.length > 0) {
        alert('Productos agregados al carrito:\n' + productosAgregados.join('\n'));
      } else {
        alert('No se agregaron productos al carrito');
      }
    alert ('Total a pagar: $'+ precioTotal)
    alert ('Gracias!')
}else{
    ingreseNombre = alert ('Gracias igualmente')
}
console.log ('Nombre ingresado: ' + nombre)
console.log ('Mail ingresado: ' + mail)





/*let agregar = parseInt(prompt('Seleccione un producto a la vez: \n' + lista.join ('')))
let cantidad = parseInt(prompt('Seleccione cantidad'))
let extra = prompt ('Producto seleccionado!\n Desea agregar otro? si/no')
do{
    parseInt(prompt('Seleccione un producto a la vez: \n' + lista.join ('')))

}while (agregar === 'si')*/