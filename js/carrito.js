const carrito = [];
function insertarProductoEnCarrito(producto){
    carrito.push (producto);
}
function cargarProductosEnCarrito(){
    let seguir
    let producto
    do {
        producto = prompt ('Ingrese nuevo producto')
        insertarProductoEnCarrito (producto)
        seguir = prompt ('Desea continuar? si/no')

    }while (seguir === 'si')
}
function muestraCarrito (){
    for (let i = 0; i < carrito.length; i ++){
        console.log (`${i} : ${carrito[i]}`)
    }
}
function eliminarItemCarrito(){
    let indice
    indice = prompt ('Elija  el indice donde se encuentra el elemento que desea eliminar')
    carrito.splice (indice, 1);
    alert ('Producto eliminado')
    console.log ('Carrito con elemento eliminado:')
    muestraCarrito()
}
cargarProductosEnCarrito()
muestraCarrito()
eliminarItemCarrito()

let empezar = prompt ('Desea agregar productos al carrito? si/no')
if (empezar != 'no'){
    alert ('Productos disponibles: '+ producto.nombre)
}