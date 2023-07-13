////RETORNAR FUNCIONES
/*
function Dios(poder){
    return function (nombre){
        console.log(`${nombre} ahora puede ${poder}!`)
    }
}
const Volar = Dios ('volar')
Volar ('Pepe')*/

////RECIBIR FUNCIONES POR PARAMETRO
/*
const miArray = [15,10,5,2]
let total = 0
function porCadaUno (array, accion){
    for (const elemento of array){
        accion (elemento)

    }
}
function suma(valor){
    total= total + valor
}
porCadaUno(miArray, suma)
console.log (total)*/

////ARROW FUNCTION
/*
const miArray = [15,10,5,2]
let total = 0
function porCadaUno (array, accion){
    for (const elemento of array){
        accion (elemento)

    }
}
porCadaUno(miArray,(valor) => {total = total + valor}) *me ahorro código, la puedo usar cuando solo voy la voy a usar una sola vez*
console.log (total)*/

////METODOS DE BUSQUEDA Y TRANSFORMACION

////FOREACH
/*
const array = ['pedro', 'juan', 'pablo']
const mostrar = function (elemento){
    console.log (elemento)
}
array.forEach((elemento) => {console.log(elemento)})*/

////FIND
/* 
const cursos = [
    {nombre: 'Javascript', precio: 150},
    {nombre: 'React', precio: 220},
]
const resultado = cursos.find((el) => el.nombre === "React")
console.log (resultado)
*/
////FILTER
/*
const cursos = [
    {nombre: 'Javascript', precio: 150},
    {nombre: 'React', precio: 220},
    {nombre: 'Angular', precio: 220},
    {nombre: 'Desarrollo Web', precio: 160},
]
const resultado = cursos.filter((el) => el.nombre.includes ('React'))
const resultado2 = cursos.filter((el) => el.precio < 220)
console.log (resultado)
console.log (resultado2)
*/

////SOME
/*
const cursos = [
    {nombre: 'Javascript', precio: 150},
    {nombre: 'React', precio: 220},
]
const resultado = cursos.some((el) => el.nombre === "React")
console.log (resultado)*/

////MAP (método de transformación) (me genera un nuevo array con la misma cantidad de elementos pero cada elemento con la misma transformacion que le damos)
/*
const carritoSinIva = [
    {nombre: 'Marcador', precio: 15},
    {nombre: 'Lapiera', precio: 10},
    {nombre: 'Lapiz', precio: 5},
    {nombre: 'Goma', precio: 2},
]
const carritoConIva = carritoSinIva.map ((producto) => {return {nombre: producto.nombre, precio: producto.precio*1.21}})
console.log (carritoSinIva)
console.log (carritoConIva)*/
////REDUCE
/*
const totalCarrito = carritoConIva.reduce((total, producto) => {return total + producto.precio}, 0)
console.log (totalCarrito)*/

////SORT (si el valor es mayor a 0 pone el item 2 antes que el item1) (si el valor es menor a 0 pone el item1 antes que el item2)
/*
carritoConIva.sort ((item1,item2) => {return item1.precio - item2.precio})*/
