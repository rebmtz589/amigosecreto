let amigos = []; 
function agregarAmigo() {

    let amigoEntrada = document.getElementById('amigo');
    let nombre = amigoEntrada.value;

    if (nombre.trim() === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    amigos.push(nombre);
    amigoEntrada.value = '';
    actualizarLista();
}

function actualizarLista() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        let li = document.createElement('li');
        li.textContent = amigo;
        listaHTML.appendChild(li);
    }
}
