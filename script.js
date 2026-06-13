// =============================
// CARRITO DE COMPRAS
// =============================

let carrito = [];

// Agregar producto
function agregarCarrito(nombre, precio){

    carrito.push({
        nombre: nombre,
        precio: precio
    });

    actualizarCarrito();

    // Ir automáticamente al carrito
    document.getElementById("carrito")
    .scrollIntoView({
        behavior:"smooth"
    });

    alert("✅ " + nombre + " agregado al carrito");
}

// Mostrar carrito
function actualizarCarrito(){

    let lista =
    document.getElementById("listaCarrito");

    let total =
    document.getElementById("totalCarrito");

    lista.innerHTML = "";

    let suma = 0;

    carrito.forEach(function(producto,index){

        suma += producto.precio;

        lista.innerHTML += `

        <div class="item-carrito">

            <div>
                <strong>${producto.nombre}</strong>
                <br>
                S/ ${producto.precio}
            </div>

            <button onclick="eliminarProducto(${index})">
                ❌
            </button>

        </div>

        `;

    });

    total.innerHTML =
    "Total: S/ " + suma;
}

// Eliminar producto
function eliminarProducto(index){

    carrito.splice(index,1);

    actualizarCarrito();

}

// =============================
// REGISTRO
// =============================

document
.getElementById("formRegistro")
.addEventListener(
"submit",
function(e){

    e.preventDefault();

    let nombre =
    document.getElementById("nombre")
    .value.trim();

    let correo =
    document.getElementById("correo")
    .value.trim();

    if(
    nombre === "" ||
    correo === ""
    ){

        alert(
        "Complete todos los campos"
        );

        return;

    }

    alert(
    "🎉 Registro exitoso\n\nBienvenido " +
    nombre
    );

    this.reset();

});

// =============================
// CONSULTAS
// =============================

document
.getElementById("formConsulta")
.addEventListener(
"submit",
function(e){

    e.preventDefault();

    let nombre =
    document.getElementById("nombreConsulta")
    .value.trim();

    let correo =
    document.getElementById("correoConsulta")
    .value.trim();

    let mensaje =
    document.getElementById("mensaje")
    .value.trim();

    if(
    nombre === "" ||
    correo === "" ||
    mensaje === ""
    ){

        alert(
        "Complete todos los campos"
        );

        return;

    }

    alert(
    "📩 Consulta enviada correctamente"
    );

    this.reset();

});

// =============================
// PAGO
// =============================

document
.getElementById("formPago")
.addEventListener(
"submit",
function(e){

    e.preventDefault();

    if(carrito.length === 0){

        alert(
        "🛒 No hay productos en el carrito"
        );

        return;
    }

    let correo =
    document.getElementById("correoPago")
    .value.trim();

    let metodo =
    document.getElementById("metodoPago")
    .value;

    let referencia =
    document.getElementById("referenciaPago")
    .value.trim();

    if(
    correo === "" ||
    metodo === "" ||
    referencia === ""
    ){

        alert(
        "Complete todos los datos del pago"
        );

        return;
    }

    let total = 0;

    carrito.forEach(function(producto){

        total += producto.precio;

    });

    let resumen = "";

    carrito.forEach(function(producto){

        resumen +=
        "• " +
        producto.nombre +
        "\n";

    });

    alert(

    "✅ COMPRA EXITOSA\n\n" +

    "Correo: " + correo +

    "\nMétodo: " + metodo +

    "\nReferencia: " + referencia +

    "\n\nProductos:\n" +

    resumen +

    "\nTotal Pagado: S/ " + total

    );

    carrito = [];

    actualizarCarrito();

    this.reset();

});

// =============================
// EFECTO DE BIENVENIDA
// =============================

window.onload = function(){

    console.log(
    "NEON PHONE STORE CARGADA"
    );

};