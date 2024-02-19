let numeroSecreto = 0; // Inicializa la variable que almacenará el número secreto
let intentos = 0; // Inicializa el contador de intentos
let listaNumerosSorteados = []; // Inicializa una lista para almacenar los números ya sorteados
let numeroMaximo = 10; // Establece el número máximo para el sorteo

// Función para asignar texto a un elemento HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// Función que se ejecuta al verificar un intento del usuario
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        // Si el usuario adivina el número
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled'); // Habilita el botón de reinicio
    } else {
        // Si el usuario no adivina, se muestra una pista
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++; // Incrementa el contador de intentos
        limpiarCaja(); // Limpia la caja de entrada del usuario
    }
    return;
}

// Función para limpiar la caja de entrada del usuario
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

// Función que genera un número secreto evitando repeticiones
function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        // Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto(); // Si está repetido, vuelve a generar otro
        } else {
            listaNumerosSorteados.push(numeroGenerado); // Agrega el número a la lista de sorteos
            return numeroGenerado;
        }
    }
}

// Función que establece las condiciones iniciales del juego
function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto(); // Genera un nuevo número secreto
    intentos = 1; // Reinicia el contador de intentos
    console.log(numeroSecreto); // Muestra el número secreto en la consola (puedes comentar esto en producción)
}

// Función que reinicia el juego
function reiniciarJuego() {
    limpiarCaja(); // Limpia la caja de entrada del usuario
    listaNumerosSorteados = []; // Reinicia la lista de sorteos
    condicionesIniciales(); // Restablece las condiciones iniciales del juego
    document.querySelector('#reiniciar').setAttribute('disabled','true'); // Deshabilita el botón de reinicio
}

// Establece las condiciones iniciales al cargar la página
condicionesIniciales();

//El atribute disabled en html hace que el boton no este activo
//El onclick como atributo de un boton es para que cuando se le de click tenga una funcion(esa funcion se puede crear ya agregar)
//Ctrl F para buscar en el codigo
//length es el tamaño