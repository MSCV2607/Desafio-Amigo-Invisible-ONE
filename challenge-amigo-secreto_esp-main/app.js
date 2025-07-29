
//Array que almacena el nombre de los amigos secretos
let nombresAmigos = [];

function agregarAmigo() {
    //Obtenemos el valor del input
    let nombre = document.getElementById("amigo").value;

    //Validamos que el campo no esté vacío
    if (nombre === "" || nombre.trim() === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    //Validamos que el nombre no esté duplicado
    if (nombresAmigos.includes(nombre.trim())) {
        alert("Este nombre ya existe en la lista.");
        return;
    }

    //Agregamos el nombre al array (sin espacios extra)
    nombresAmigos.push(nombre.trim());

    //Limpiamos el input
    document.getElementById("amigo").value = "";

    //Actualizamos la lista de amigos secretos
    mostrarAmigos();
}
