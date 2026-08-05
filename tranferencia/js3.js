export function procesarCompra(cliente, productos) {
    try {
        if (!cliente || typeof cliente !== "object" || !cliente.nombre || !cliente.correo) {
            throw new Error("El cliente debe ser un objeto válido con nombre y correo.");
        }
        if (!Array.isArray(productos) || productos.length === 0) {
            throw new Error("La lista de productos debe ser un arreglo no vacío.");
        }

        for (let i = 0; i < productos.length; i++) {
            const prod = productos[i];
            if (!prod || typeof prod.precio !== "number" || !prod.nombre) {
                throw new Error("Cada producto debe contener un nombre y un precio numérico.");
            }
        }

        const clienteInfo = { ...cliente };

        const [primerProducto, ...restoProductos] = productos;

        const totalProductos = productos.length;
        let precioTotal = 0;
        for (let i = 0; i < productos.length; i++) {
            precioTotal += productos[i].precio;
        }

        return Object.freeze({
            cliente: clienteInfo,
            totalProductos,
            precioTotal,
            primerProductoAdquirido: { ...primerProducto }
        });

    } catch (error) {
        console.error(`[Error Ejercicio 3]: ${error.message}`);
        return null;
    }
}