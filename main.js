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
    // Seleccionamos los elementos del DOM que vamos a utilizar
    const searchInput = document.getElementById('searchInput');
    const cardsContainer = document.querySelector('.container .row');
    const errorCard = document.querySelector('.card-error');

    // Array de productos simulados
    const productos = [
        { nombre: 'Gel de limpieza', descripcion: 'Gel de limpieza apto para todo tipo de piel.' },
        { nombre: 'Serum H', descripcion: 'Serum ultra hidratante concentrado.' },
        { nombre: 'Crema hidratante', descripcion: 'Crema hidratante Allday' },
        { nombre: 'Crema humectante', descripcion: 'Crema humectante con proteccion UV' },
        { nombre: 'Protector solar', descripcion: 'Protector solar FPS 50 con toque seco' },
        { nombre: 'Agua termal', descripcion: 'Agua termal volcánica' }
    ];

    // Función para mostrar los productos que coincidan con la búsqueda
    function buscarProductos(termino) {
        // Convertimos el término de búsqueda a minúsculas y lo eliminamos de espacios
        const terminoBusqueda = termino.toLowerCase().trim();

        // Filtrar productos que coincidan con el término de búsqueda
        const productosFiltrados = productos.filter(producto =>
            producto.nombre.toLowerCase().includes(terminoBusqueda)
        );

        cardsContainer.innerHTML = '';

        // Mostrar productos filtrados o mensaje de error según corresponda
        if (productosFiltrados.length > 0) {
            mostrarProductos(productosFiltrados);
            errorCard.style.display = 'none'; // Ocultar mensaje de error
        } else {
            errorCard.style.display = 'block'; // Mostrar mensaje de error
        }
    }

    // Función para mostrar los productos en las cards
    function mostrarProductos(productos) {
        cardsContainer.innerHTML = ''; // Limpiar contenido de productos anteriores
        productos.forEach(producto => {
            // Generamos el HTML para cada producto y lo agregamos al contenedor de cards
            const card = `
                <div class="col-md-4">
                    <div class="card">
                        <img src="https://via.placeholder.com/150" class="card-img-top" alt="Product Image">
                        <div class="card-body">
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">${producto.descripcion}</p>
                            <button class="btn btn-primary" data-producto="${producto.nombre}">Comprar</button>
                        </div>
                    </div>
                </div>
            `;
            cardsContainer.innerHTML += card;
        });
    }

    // Escuchamos el evento de entrada en el input de búsqueda
    searchInput.addEventListener('input', function(event) {
        const termino = event.target.value;
        buscarProductos(termino); // Llamamos a la función de búsqueda con el término ingresado
    });

    // Mostramos todos los productos al cargar la página
    mostrarProductos(productos);
});

let carrito = [];

// Manejador de eventos para el botón "Comprar"
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("btn-primary")) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del enlace

        const productoNombre = event.target.parentElement.querySelector(".card-title").textContent;
        carrito.push(productoNombre);

        mostrarMensajeCarrito();
    }
});

// Función para mostrar el mensaje de producto agregado al carrito
function mostrarMensajeCarrito() {
    const cartMessage = document.getElementById("cartMessage");
    const cartButton = document.getElementById("cartButton");

    cartMessage.style.display = "block"; // Mostrar el mensaje
    cartButton.style.display = "inline-block"; // Mostrar el botón de carrito

    setTimeout(function() {
        cartMessage.style.display = "none"; // Ocultar el mensaje después de unos segundos
    }, 3000);
}

// Manejador de eventos para el botón "Ver Carrito"
document.getElementById("cartButton").addEventListener("click", function() {
    alert("Contenido del carrito: " + carrito.join(", "));
});

// Verificamos si hay datos almacenados en localStorage al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    const carritoGuardado = localStorage.getItem("carrito");
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
    }
});

// Función para guardar el carrito en localStorage
function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Manejador de eventos para el botón "Comprar"
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("btn-primary")) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del enlace

        const productoNombre = event.target.parentElement.querySelector(".card-title").textContent;
        carrito.push(productoNombre);

        mostrarMensajeCarrito();
        guardarCarrito(); // Guardar el carrito en localStorage
    }
});

// Manejador de eventos para el botón "Ver Carrito"
document.getElementById("cartButton").addEventListener("click", function() {
    const cartContent = document.getElementById("cartContent");
    const cartList = document.getElementById("cartList");

    // Limpiamos la lista de carrito antes de actualizarla
    cartList.innerHTML = '';

    // Mostramos el contenido del carrito
    carrito.forEach(producto => {
        const li = document.createElement("li");
        li.textContent = producto;
        cartList.appendChild(li);
    });

    // Mostramos el contenedor del carrito
    cartContent.style.display = "block";
});

// Función para mostrar el mensaje de producto agregado al carrito
function mostrarMensajeCarrito() {
    const cartMessage = document.getElementById("cartMessage");
    const cartButton = document.getElementById("cartButton");

    cartMessage.style.display = "block"; // Mostrar el mensaje
    cartButton.style.display = "inline-block"; // Mostrar el botón de carrito

    setTimeout(function() {
        cartMessage.style.display = "none"; // Ocultar el mensaje después de unos segundos
    }, 3000);
}