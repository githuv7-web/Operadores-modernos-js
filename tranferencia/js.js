//ACTIVIDADES DE APRENDIZAJE EJERCICIO 2//

export function agregarProducto(lista, ...nuevoProducto) {
    const resultado = [];
    for (let i = 0; i < lista.length; i += 1) {
        resultado[resultado.length] = lista[i];
    }
    for (let i = 0; i < nuevoProducto.length; i += 1) {
        resultado[resultado.length] = nuevoProducto[i];
    }
    return resultado;
}

