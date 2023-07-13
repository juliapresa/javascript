//MOUSE: Hacer click sobre el boton:
/*const boton = document.querySelector('#botonAgregar')
boton.addEventListener ('click', hicisteClick)
function hicisteClick (){
    alert ('Hiciste click!')
}*/
 //MOUSE: Hacer click sobre el boton: 
/*const boton2 = document.querySelector('#botonAgregar')
boton2.onclick = () => {alert('Hiciste click')}*/

//onclick, mousemove, mouseover, mouseup, mousedown, mouseout

//TECLADO: Cuando se PRESIONA cualquier tecla:
/*miInput.addEventListener ('keydown', () => {
    console.log ('Ejecutaste el evento en el imput)}*/

//TECLADO: Cuando se SUELTA cualquier tecla:
/*miInput.addEventListener ('keyup', () => {
    console.log ('Ejecutaste el evento en el imput)}*/

//TECLADO: SOLO CIERTOS CARACTERES
/*miInput.addEventListener ('keypress', () => {
    console.log ('Ejecutaste el evento en el imput)}*/    

//para, por ejemplo, cambiarle el color
/*miImput.addEventListener ('change', () => {
    miImput.classList.add ('btn danger')
}) */

//forma de validación: 
/*miImput.addEventListener('change', () => {
    const texto = miImput.value
    if (texto.includes ('algo')){
        miImput.classListe.add ('verde')
        miImput.classList.remove('rojo')
    }else{
        miImput.classList.remove ('verde)
        miImput.classList.add ('rojo')
    }
})*/

//forma de validación: lo mismo que chance pero con imput cambia en el momento, es por tecla
/*miImput.addEventListener('imput', () => {
    const texto = miImput.value
    if (texto.includes ('algo')){
        miImput.classListe.add ('verde')
        miImput.classList.remove('rojo')
    }else{
        miImput.classList.remove ('verde)
        miImput.classList.add ('rojo')
    }
})*/
//VALUE: contiene lo que escribió el usuario

//EVENTO SUBMIT: se activa cuando el formulario es enviado

//PARA PREVENIR LA ACCION POR DEFECTO:
/*
const id = document.querySelector ('#id')
formulario.addEventListener ('click', (e) =>{
console.log (e)
e.preventDefault()
})*/

/*const formulario = document.querySelector ('#formulario')
formulario.addEventListener ('click', (e) =>{
*/