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
}
