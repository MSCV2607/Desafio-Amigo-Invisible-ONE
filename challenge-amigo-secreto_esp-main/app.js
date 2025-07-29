
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

function mostrarAmigos() {
    //Obtenemos el elemento donde mostraremos los amigos
    let listaAmigos = document.getElementById("listaAmigos");

    //Limpiamos la lista actual
    listaAmigos.innerHTML = "";

    //Recorremos el array y mostramos cada amigo
    nombresAmigos.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    //Validamos que haya al menos un amigo en la lista
    if (nombresAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    //Generamos un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * nombresAmigos.length);
    
    //Obtenemos el amigo sorteado
    let amigoSorteado = nombresAmigos[indiceAleatorio];
    
    //Mostramos el resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto sorteado es: <strong>${amigoSorteado}</strong></li>`;
}