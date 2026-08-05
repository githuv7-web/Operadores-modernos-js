export function fusionarCatalogos(a, b) {
    try {
        if (!Array.isArray(a) || !Array.isArray(b)) {
            throw new Error("Ambos parámetros deben ser arreglos válidos.");
        }

        const catalogoFusionado = [...a, ...b];

        for (let i = 0; i < catalogoFusionado.length; i++) {
            for (let j = 0; j < catalogoFusionado.length - 1 - i; j++) {
                if (catalogoFusionado[j].precio > catalogoFusionado[j + 1].precio) {
                    const temp = catalogoFusionado[j];
                    catalogoFusionado[j] = catalogoFusionado[j + 1];
                    catalogoFusionado[j + 1] = temp;
                }
            }
        }

        return Object.freeze(catalogoFusionado);

    } catch (error) {
        console.error(`[Error Ejercicio 2]: ${error.message}`);
        return [];
    }
}