export function crearEstudiante(nombre, ...notas) {
    try {
        if (!nombre || typeof nombre !== "string") {
            throw new Error("El nombre del estudiante es obligatorio y debe ser un texto.");
        }
        if (notas.length === 0) {
            throw new Error("Debe registrar al menos una nota.");
        }
        
        const notasValidas = [];
        for (let i = 0; i < notas.length; i++) {
            const numero = Number(notas[i]);
            if (isNaN(numero)) {
                throw new Error("Todas las notas deben ser valores numéricos.");
            }
            notasValidas[notasValidas.length] = numero;
        }

        const [primeraNota, ...restoNotas] = notasValidas;

        let sumaResto = 0;
        for (let i = 0; i < restoNotas.length; i++) {
            sumaResto += restoNotas[i];
        }
        const promedioResto = restoNotas.length > 0 ? sumaResto / restoNotas.length : primeraNota;

        return Object.freeze({
            nombre,
            primeraNota,
            promedioResto: Number(promedioResto.toFixed(2)),
            totalNotas: notasValidas.length
        });

    } catch (error) {
        console.error(`[Error Ejercicio 1]: ${error.message}`);
        return null;
    }
}