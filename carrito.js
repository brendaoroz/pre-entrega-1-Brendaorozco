document.addEventListener("DOMContentLoaded", function() {
    const cartList = document.getElementById("cartList");
    const totalAmount = document.getElementById("totalAmount");
    const continueShoppingBtn = document.getElementById("continueShoppingBtn");
    const checkoutBtn = document.getElementById("checkoutBtn");
    
    let cartItems = [];

    function addToCart(product) {
        cartItems.push(product);
        updateCart();
    }

    function updateCart() {
        cartList.innerHTML = "";
        let total = 0;

        cartItems.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = `${item.nombre}: $${item.precio.toFixed(2)}`;
            cartList.appendChild(listItem);

            total += item.precio;
        });

        totalAmount.textContent = `Total: $${total.toFixed(2)}`;
    }

    continueShoppingBtn.addEventListener("click", function() {
        window.location.href = "index.html"; 
    });

    checkoutBtn.addEventListener("click", function() {
        alert("Procesando pago...");
    });

    const productos = [
        { nombre: 'Producto 1', precio: 10 },
        { nombre: 'Producto 2', precio: 15 },
        { nombre: 'Producto 3', precio: 20 }
    ];

    productos.forEach(producto => {
        const productBtn = document.createElement("button");
        productBtn.textContent = `Agregar ${producto.nombre} - $${producto.precio.toFixed(2)}`;
        productBtn.addEventListener("click", function() {
            addToCart(producto);
        });
        document.body.appendChild(productBtn);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    mostrarProductosEnCarrito();
});


function mostrarProductosEnCarrito() {
    const cartList = document.getElementById("cartList");
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    cartList.innerHTML = '';

    carrito.forEach(producto => {
        const li = document.createElement("li");
        li.textContent = producto.nombre;
        cartList.appendChild(li);
    });
}
