class Compra {
    constructor(carritoDeCompras) {
        this.carrito = carritoDeCompras;
    }
    obtenerSubtotal() {
        if (this.carrito.length > 0) {
            return this.carrito.reduce((acumulador, producto)=> acumulador + producto.precio, 0);
        }else {
            return 0;
        }
    }
}
