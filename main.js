/* - PERFUMERÍA CANDYFLIP -*/

function consultarPrecio(codigo) {
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
}