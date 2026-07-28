function mostrarDireccion(direccion){
    try{
        const {ciudad, pais} = direccion || {};
        if (!ciudad || !pais){
            throw new Error("La informacion de la direccion no es valida");
        }

        console.log("Direccion valia:" + ciudad + pais);
        return ciudad + pais;
    } catch(error){
        console.error("Error atrapado:" + error.message);
    }
}

console.log("--- Caso de éxito ---");
mostrarDireccion({ ciudad: "Bogotá", pais: "Colombia" });
// Muestra: Dirección válida: Bogotá, Colombia

// Caso 2: Objeto incompleto (provoca el error personalizado)
console.log("\n--- Caso con error ---");
mostrarDireccion({ ciudad: "Bogotá" });
// Muestra: Error atrapado: La información de la dirección no es válida

// Caso 3: Objeto vacío o undefined
console.log("\n--- Caso objeto vacío ---");
mostrarDireccion({});
