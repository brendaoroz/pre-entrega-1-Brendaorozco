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

// const carrito =[]

// const productos = [{codigo: 1, nombre: 'Gel de limpieza', precio: 8999},
//                      {codigo: 2, nombre:'Serum H', precio: 7550},
//                      {codigo: 3, nombre:'Crema hidratante', precio: 4950}, 
//                      {codigo: 4, nombre:'Crema humectante', precio: 4950},
//                      {codigo: 5, nombre:'Protector solar' , precio: 12500},
//                      {codigo: 6, nombre:'Agua termal' , precio: 10500}]

// function buscarProducto(codigo) {
//      let productoSeleccionado = productos.find((producto)=> producto.codigo === parseInt(codigo))
//      return productoSeleccionado
// }

// function comprar() {
//      let codigoProducto = prompt("Ingrese el código del producto:");

//      let productoElegido = buscarProducto(codigoProducto);

//      if (productoElegido === undefined) {         alert("Error. Código no encontrado.");
//      } else {
//          let confirmacion = confirm("El producto " + productoElegido.nombre + " está seleccionado. ¿Desea agregarlo al carrito?");
        
//          if (confirmacion) {
//              carrito.push(productoElegido);
//              alert(productoElegido.nombre + " ha sido agregado al carrito.");
//          } else {
//              alert("Producto no agregado al carrito.");
//          }

//          let respuesta = confirm("¿Desea buscar otro producto?");

//          if (respuesta) {
//              comprar();
//          } else {             console.clear();
//              console.table(carrito);
//              const shopping = new Compra(carrito);
//              console.log("El total de tu compra es de: $ " + shopping.obtenerSubtotal());
//              console.log("¡Muchas gracias por tu compra! ♥");
//          }
//      }
// }
/* TERCER PRE-ENTREGA */

// document.addEventListener("DOMContentLoaded", function () {
//     const botonesComprar = document.querySelectorAll(".btn-primary");

//     botonesComprar.forEach((boton) => {
//         boton.addEventListener("click", function (event) {
//             event.preventDefault();
//             const codigoProducto = boton.dataset.codigo;
//             const productoElegido = buscarProducto(codigoProducto);

//             if (productoElegido === undefined) {
//                 mostrarMensaje("Error. Código no encontrado.");
//             } else {
//                 mostrarConfirmacion(`¿Agregar ${productoElegido.nombre} al carrito?`, () => {
//                     carrito.push(productoElegido);
//                     mostrarMensaje(`${productoElegido.nombre} ha sido agregado al carrito.`);
//                 });
//             }
//         });
//     });

//     function mostrarMensaje(mensaje) {
//         const mensajeElement = document.createElement("div");
//         mensajeElement.classList.add("mensaje");
//         mensajeElement.textContent = mensaje;
//         document.body.appendChild(mensajeElement);

//         setTimeout(() => {
//             mensajeElement.remove();
//         }, 3000);
//     }

//     function mostrarConfirmacion(mensaje, callback) {
//         const confirmacion = document.createElement("div");
//         confirmacion.classList.add("confirmacion");
//         confirmacion.innerHTML = `
//             <p>${mensaje}</p>
//             <button class="btn-confirmar">Confirmar</button>
//             <button class="btn-cancelar">Cancelar</button>
//         `;
//         document.body.appendChild(confirmacion);

//         const btnConfirmar = confirmacion.querySelector(".btn-confirmar");
//         const btnCancelar = confirmacion.querySelector(".btn-cancelar");

//         btnConfirmar.addEventListener("click", () => {
//             confirmacion.remove();
//             callback();
//         });

//         btnCancelar.addEventListener("click", () => {
//             confirmacion.remove();
//         });
//     }
// });


/* PROYECYO FINAL */

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('searchInput');
    const cardsContainer = document.querySelector('.container .row');
    const errorCard = document.querySelector('.card-error');
    const cartButton = document.getElementById("cartButton");
    const cartList = document.getElementById("cartList");

    let carrito = [];

    const productos = [
        { nombre: 'Gel de limpieza', descripcion: 'Gel de limpieza apto para todo tipo de piel.', precio: 8999 },
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
                        <img src="https://via.placeholder.com/150" class="card-img-top" alt="Product Image">
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
            li.textContent = `${producto.nombre} - Precio: $${producto.precio}`; // Agregar precio
            cartList.appendChild(li);
        });
    }


    document.addEventListener("DOMContentLoaded", function() {
        const searchInput = document.getElementById('searchInput');
        // Tu código que utiliza el searchInput
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
            const producto = productos.find(p => p.nombre === productoNombre); // Buscar el producto por nombre
            addToCart(producto);
        }
    });

    cartButton.addEventListener("click", function() {
        window.location.href = "carrito.html";
    });
});
