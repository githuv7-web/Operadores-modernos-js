export function configFinal(...configs) {
    try {
        for (let i = 0; i < configs.length; i++) {
            const cfg = configs[i];
            if (!cfg || typeof cfg !== "object" || Array.isArray(cfg)) {
                throw new Error("Cada configuración enviada debe ser un objeto válido.");
            }
        }

        let objetoMezclado = {};
        for (let i = 0; i < configs.length; i++) {
            objetoMezclado = { ...objetoMezclado, ...configs[i] };
        }

        return Object.freeze({
            ...objetoMezclado,
            validacion: true
        });

    } catch (error) {
        console.error(`[Error Ejercicio 5]: ${error.message}`);
        return Object.freeze({
            validacion: false,
            mensajeError: error.message
        });
    }
}