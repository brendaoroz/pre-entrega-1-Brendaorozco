



document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('searchInput');
    const cardsContainer = document.querySelector('.container .row');
    const errorCard = document.querySelector('.card-error');
    const cartButton = document.getElementById("cartButton");
    const cartList = document.getElementById("cartList");

    let carrito = [];

    const productos = [
        { nombre: 'Gel de limpieza', descripcion: 'Gel de limpieza apto para todo tipo de piel.', precio: 8999, imagen: ".\multimedia\gel_aveno1.jpg" },
        { nombre: 'Serum H', descripcion: 'Serum ultra hidratante concentrado.', precio: 12500 },
        { nombre: 'Crema hidratante', descripcion: 'Crema hidratante Allday', precio: 11000},
        { nombre: 'Crema humectante', descripcion: 'Crema humectante con proteccion UV', precio: 11000 },
        { nombre: 'Protector solar', descripcion: 'Protector solar FPS 50 con toque seco', precio: 15900 },
        { nombre: 'Agua termal', descripcion: 'Agua termal volcánica', precio: 9500 }
    ];

    function buscarProductos(termino) {
        const terminoBusqueda = termino.toLowerCase().trim();
        const productosFiltrados = productos.filter(producto =>
            producto.nombre.toLowerCase().includes(terminoBusqueda)
        );

        cardsContainer.innerHTML = '';

        if (productosFiltrados.length > 0) {
            mostrarProductos(productosFiltrados);
            errorCard.style.display = 'none';
        } else {
            errorCard.style.display = 'block';
        }
    }

    function mostrarProductos(productos) {
        const cardsContainer = document.querySelector('.container .row');
        if (!cardsContainer) {
            console.error("No se pudo encontrar el contenedor de tarjetas.");
            return;
        }
        cardsContainer.innerHTML = '';
        productos.forEach(producto => {
            const card = `
                <div class="col-md-4">
                    <div class="card">
                        <img src="${producto.imagen}" class="card-img-top" alt="Product Image">
                        <div class="card-body">
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">${producto.descripcion}</p>
                            <p class="card-price">$${producto.precio.toFixed(2)}</p>
                            <button class="btn btn-primary addToCartBtn">Comprar</button>
                        </div>
                    </div>
                </div>
            `;
            cardsContainer.innerHTML += card;
        });
    }
    

    function addToCart(producto) {
        carrito.push(producto);
        mostrarMensajeCarrito();
        guardarCarrito();
        mostrarProductosEnCarrito();
    }

    function mostrarMensajeCarrito() {
        const cartMessage = document.getElementById("cartMessage");
        const cartButton = document.getElementById("cartButton");

        cartMessage.style.display = "block";
        cartButton.style.display = "inline-block";

        setTimeout(function() {
            cartMessage.style.display = "none";
        }, 3000);
    }

    function guardarCarrito() {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }

    function mostrarProductosEnCarrito() {
        cartList.innerHTML = '';
        const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
        carritoGuardado.forEach(producto => {
            const li = document.createElement("li");
            li.textContent = `${producto.nombre} - Precio: $${producto.precio}`;
            cartList.appendChild(li);
        });
    }


    document.addEventListener("DOMContentLoaded", function() {
        const searchInput = document.getElementById('searchInput');

        searchInput.addEventListener('input', function(event) {
            const termino = event.target.value;
            buscarProductos(termino);
        });
    });
    


    mostrarProductos(productos);

    document.addEventListener("click", function(event) {
        if (event.target.classList.contains("addToCartBtn")) {
            event.preventDefault();
            const productoNombre = event.target.parentElement.querySelector(".card-title").textContent;
            const producto = productos.find(p => p.nombre === productoNombre);
            addToCart(producto);
        }
    });

    cartButton.addEventListener("click", function() {
        window.location.href = "carrito.html";
    });
});