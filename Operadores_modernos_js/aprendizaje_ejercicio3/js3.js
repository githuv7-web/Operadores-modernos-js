
function mostrarDireccion (direccion){
    try{
        const{ciudad,pais}=direccion

        if(!ciudad || !pais){
            throw new Error("La informacion de la direccion no es valida")

        }

         console.log("Direccion valida: " + ciudad +" "+ pais)
         
    } catch (error){console.error("Error: " + error.message)}
    
   

}

const direccionCorrecta = {ciudad:"Bogota" , pais:"Colombia"}
mostrarDireccion(direccionCorrecta)

const direccionIncorrecta = {ciudad:"Bogota" }
mostrarDireccion(direccionIncorrecta)
