/**
 * Emily Lara
 * 00000270719
 * Reto 01
 */


// Función para preparar canciones 
function prepareSongs(songs){

    // Creamos un arreglo vacio donde guardaremos
    // las canciones que no esten repetidas.
    const cancionesUnicas = [];

    // Recorremos todas las canciones del arreglo original.
    songs.forEach((cancion) => {

        // Revisamos si la cancion ya se encuentra en el nuevo arreglo.
        if (!cancionesUnicas.includes(cancion)) {

            // Si no existe, la agregamos.
            cancionesUnicas.push(cancion);

        }

    });

    // Ordenamos las canciones de menor a mayor.
    cancionesUnicas.sort((a, b) => a - b);

    // Regresamos el arreglo ya preparado.
    return cancionesUnicas;
}

// Primera prueba
const songs1 = [3, 1, 2, 3, 4, 2, 5];
const playlist1 = prepareSongs(songs1);
console.log("Lista 1:", playlist1);

// Segunda prueba
const songs2 = [6, 5, 5, 5, 5];
const playlist2 = prepareSongs(songs2);
console.log("Lista 2:", playlist2);

// Tercera prueba
const songs3 = [];
const playlist3 = prepareSongs(songs3);
console.log("Lista 3:", playlist3);