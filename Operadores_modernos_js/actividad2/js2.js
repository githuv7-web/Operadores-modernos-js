const productos = ["telcado","mouse","pantalla"];

function agregarProducto(lista,...nuevoProducto){
return [...lista,...nuevoProducto];

}

const productosActualizados = agregarProducto (productos, "perrito","banano")

console.log(productos)

console.log(productosActualizados)

