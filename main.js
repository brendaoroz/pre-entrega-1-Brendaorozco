/* - PERFUMERÍA CANDYFLIP -*/

/*function consultarPrecio(codigo) {
    switch(codigo) {
        case 1:
            alert("El valor del Gel de limpieza es de $2890")
            break
        case 2:
            alert("El valor del Serum H es de $8350")
            break
        case 3:
            alert("El valor de la crema hidratante es de $5200")
            break
        case 4:
            alert("El valor de la crema humectante es de $4900")
            break
        case 5: 
            alert("El valor del protector solar es de $10500")
            break
        default:
            alert("Producto no disponible")
    }
}

function consultarStock(codigo) {
    switch(codigo) {
        case 1:
            alert("El producto se encuentra disponible")
            break
        case 2:
            alert("El producto se encuentra disponible")
            break
        case 3:
            alert("El producto se encuentra disponible")
            break
        case 4:
            alert("El producto se encuentra disponible")
            break
        case 5: 
            alert("El producto se encuentra disponible")
            break
        default:
            alert("Producto no disponible")
    }
}

function mostrarCuotas() {
    console.log("Puede abonar en:")
    for ( let i = 1; i <= 3; i++) {
        console.log(i + " Cuota(s) sin interés.")
    }
}


function consultarProducto() {
    let producto = prompt("Ingrese el código del producto");

    if (producto !== null && producto !== "") {
        consultarStock(parseInt(producto));
        consultarPrecio(parseInt(producto));

        let realizarCompra = confirm("¿Desea realizar la compra con tarjeta?");
        
        if (realizarCompra) {
            mostrarCuotas();
        }
    } else {
        console.warn("Producto no disponible");
    }
}*/


/* SEGUNDA PRE-ENTREGA */
/* CARRITO DE COMPRAS DE "PERFUMERIA CANDYFLIP" */

const carrito =[]

const productos = [{codigo: 1, nombre: 'Gel de limpieza', precio: 8999},
                    {codigo: 2, nombre:'Serum H', precio: 7550},
                    {codigo: 3, nombre:'Crema hidratante', precio: 4950}, 
                    {codigo: 4, nombre:'Crema humectante', precio: 4950},
                    {codigo: 5, nombre:'Protector solar' , precio: 12500}]

function buscarProducto(codigo) {
    let productoSeleccionado = productos.find((producto)=> producto.codigo === parseInt(codigo))
    return productoSeleccionado
}

function comprar() {
    let codigoProducto = prompt("Ingrese el código del producto:");

    let productoElegido = buscarProducto(codigoProducto);

    if (productoElegido === undefined) {
        alert("Error. Código no encontrado.");
    } else {
        let confirmacion = confirm("El producto " + productoElegido.nombre + " está seleccionado. ¿Desea agregarlo al carrito?");
        
        if (confirmacion) {
            carrito.push(productoElegido);
            alert(productoElegido.nombre + " ha sido agregado al carrito.");
        } else {
            alert("Producto no agregado al carrito.");
        }

        let respuesta = confirm("¿Desea buscar otro producto?");

        if (respuesta) {
            comprar();
        } else {
            console.clear();
            console.table(carrito);
            const shopping = new Compra(carrito);
            console.log("El total de tu compra es de: $ " + shopping.obtenerSubtotal());
            console.log("¡Muchas gracias por tu compra! ♥");
        }
    }
}