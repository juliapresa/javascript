/*console.log(document);
console.log(document.body);
console.log(document.head);
console.log (document.URL);
console.log(document.contentType);
console.log(document.scripts);

///paso uno: busco el elemento, paso dos: trabajo con el elemento
///clase.innerText = 'texto' (cambia el texto)


//una forma de armar las tarjetas: (no se me conectaba con las d html)
/*function armarTarjetas(){
    const bodyTarjetas = document.getElementById('producto')
    bodyTarjetas.innerHTML ="";
    carrito.forEach((producto) => {
        bodyTarjetas.innerHTML = bodyTarjetas.innerHTML + 
        `
        <div>
            <div>
                <h5>${producto.nombre}</h5>
                <p>Precio: ${producto.precio}</p>
                <a>Agregar</a>
            </div>
        </div>
        
        `
    }); 
}*/
//una forma de armar las tarjetas: (queda largo el codigo en html)
/*function armarTarjetas() {
    const tarjetas = document.querySelectorAll('.tarjeta');

    tarjetas.forEach((tarjeta, index) => {
        const tituloElemento = tarjeta.querySelector('.cardTitle');
        const precioElemento = tarjeta.querySelector('.cardPrecio');

        tituloElemento.textContent = carrito[index].nombre;
        precioElemento.textContent = 'Precio: $' + carrito[index].precio;
    });
}*/

