//ACTIVIDADES DE APRENDIZAJE EJERCICIO 2//

const productos = ["teclado","mouse","pantalla"]

function agregarProducto(lista,...nuevoProducto){
    return [...lista, ...nuevoProducto];   
    }

    const productosActualizados = agregarProducto(productos, "audifonos","perros");

console.log("Productos originales", productos);

console.log("Productos agregados",productosActualizados);

