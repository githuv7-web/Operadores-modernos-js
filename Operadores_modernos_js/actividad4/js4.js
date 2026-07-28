
const estudianteOriginal= {
nombre: "Laura",
notas: [4.0,3.8]
};

function actualizarNotas(estudiante, ...nuevasNotas){
    return{ 
        nombre:estudiante.nombre,
        notas:[...estudiante.notas, ...nuevasNotas]
    }
}

const estudianteActualizado = actualizarNotas(estudianteOriginal, 4.5,5.0)

console.log("Estudiante original: ", estudianteOriginal )

console.log("Estudiante actualizado: " , estudianteActualizado)