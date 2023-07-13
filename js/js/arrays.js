const arrayProducto = ["Marcador","Lapicera", "Lapiz", "Goma"]
console.log ('Cantidad de elementos: ' + arrayProducto.length)
for (let i = 0; i < arrayProducto.length; i++){
    console.log (arrayProducto [i])
}
///PUSH
/*
arrayProducto.push ('Goma')
console.log (arrayProducto)*/

///UNSHIFT
/*
arrayProducto.unshift ('Marcador')
console.log (arrayProducto)*/

////JOIN
/*
const join = ['marcador','rojo','naranja', 'azul']
const url = join.join('/')*/

////ELIMINAR CON SHIFT
/*
let elementoQuitado = carrito.shift();
console.log ('Quite el elemento: '+ elementoQuitado)*/

////ELIMINAR CON POP
/*
let elementoQuitado = carrito.pop();
console.log ('Quite el elemento: '+ elementoQuitado)*/

////INDEXOF
/*
const carrito = ['jabon', 'leche', 'pan', 'galletas']
let elemento = prompt('Ingrese el elemento a buscar:')
let indice = carrito.indexOf('pan');
if (indice !== -1){
    console.log ('El elemento se encuentra en la posicion: ', indice)
}else{
    console.log ('El elemento no existe')
}*/

////INCLUDES
/*
if (carrito.includes('cacao?)){
    console.log ('El usuario tiene añadido cacao en el carrito')
}*/
