export function estadisticas(jugadores) {
    try {
        if (!Array.isArray(jugadores) || jugadores.length === 0) {
            throw new Error("La lista de jugadores debe ser un arreglo válido y no vacío.");
        }

        for (let i = 0; i < jugadores.length; i++) {
            const j = jugadores[i];
            if (!j.nombre || !j.stats || typeof j.stats.puntos !== "number") {
                throw new Error("La estructura de los datos del jugador es incorrecta.");
            }
        }

        const [{ stats: { puntos: puntosPrimerJugador } }, ...restoJugadores] = jugadores;

        let puntosTotales = 0;
        for (let i = 0; i < jugadores.length; i++) {
            puntosTotales += jugadores[i].stats.puntos;
        }

        const jugadoresProcesadosArr = [];
        for (let i = 0; i < jugadores.length; i++) {
            const j = jugadores[i];
            jugadoresProcesadosArr[jugadoresProcesadosArr.length] = Object.freeze({
                ...j,
                stats: Object.freeze({ ...j.stats })
            });
        }
        const jugadoresProcesados = Object.freeze(jugadoresProcesadosArr);

        return Object.freeze({
            puntosPrimerJugador,
            puntosTotales,
            jugadoresProcesados
        });

    } catch (error) {
        console.error(`[Error Ejercicio 4]: ${error.message}`);
        return null;
    }
}