const MARCADOR = 1;
const LAPICERA = 2;
const LAPIZ = 3;
const GOMA = 4;
const PRECIOMARCADOR = 15;
const PRECIOLAPICERA =10;
const PRECIOLAPIZ =5;
const PRECIOGOMA = 2;
let opcion;
let continuar = 'si';
let total = 0;
let ingreseNombre;
let precioTotal =0;
function calculo (total, precio, cantidad){
    return total + precio*cantidad
}
alert ('Bienvenido a la papelería')
let nombreUsuario = prompt ('Ingrese su nombre:')
if (nombreUsuario != ""){
    alert ('Agrega productos a tu carrito!');
    do{
        opcion = parseInt(prompt (' 1- Marcador $15 \n 2- Lapicera $10 \n 3- Lapiz $5 \n 4- Goma $2 \n Ingrese su opcion: '
                        ));
        switch (opcion){
            case MARCADOR:
                cantidad = parseInt(prompt('Seleccione cantidad'))
                precioTotal = calculo (precioTotal, PRECIOMARCADOR, cantidad)
            break;
            case LAPICERA:
                cantidad = parseInt(prompt('Seleccione cantidad'))
                precioTotal = calculo (precioTotal, PRECIOLAPICERA, cantidad)
            break;
            case LAPIZ:
                cantidad = parseInt(prompt('Seleccione cantidad'))
                precioTotal = calculo (precioTotal, PRECIOLAPIZ, cantidad)
            break;
            case GOMA:
                cantidad = parseInt(prompt('Seleccione cantidad'))
                precioTotal = calculo (precioTotal, PRECIOGOMA, cantidad)
            break;
            default:
                alert ('Algo falló, seleccione nuevamente')
        }
        alert ('Item seleccionado')
        continuar = prompt ('Desea agegar otro item? si/listo')
        total = total + MARCADOR, LAPICERA, LAPIZ, GOMA;
    }while (continuar == 'si')
    alert ('Total de productos seleccionados: ' + total)
    alert ('Total a pagar: $'+ precioTotal)
    alert ('Gracias!')
}else{
    ingreseNombre = alert ('Campo obligatorio, ingrese nombre')
}
