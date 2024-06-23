let numeroSecreto = 0;
let numerosIntentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoHtml(elemento, texto) {
  let elementoHtml = document.querySelector(elemento);
  elementoHtml.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoHtml(
      "p",
      `¡Felicidades! Adivinaste el número secreto en ${numerosIntentos} ${
        numerosIntentos === 1 ? "vez" : "veces"
      }.`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    //el usuario no acertó

    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoHtml("p", "El número secreto es menor.");
    } else {
      asignarTextoHtml("p", "El número secreto es mayor.");
    }
    numerosIntentos++;
    limpiarCampo();
  }
  return;
}

function limpiarCampo() {
  document.getElementById("valorUsuario").value = "";
  return;
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo + 1);
  // si el numero generado está incluido en la lista
  console.log(listaNumerosSorteados);
  console.log(numeroGenerado);
  //si ya sorteamos todos los números
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoHtml("p", "Ya no hay más números para adivinar.");
  } else {
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function condicionesIniciales() {
  asignarTextoHtml("h1", "Juego del número secreto");
  asignarTextoHtml(
    "p",
    `Adivina el número secreto que está entre 1 y ${numeroMaximo}.`
  );
  numeroSecreto = generarNumeroSecreto();
  numerosIntentos = 1;
}

function reiniciarJuego() {
  //limpiar campo
  limpiarCampo();
  //indicar mensaje de intervalo de números
  //Generar el número secreto
  //Iniciarlizar el número de intentos
  condicionesIniciales();
  //Deshabilitar el botón de nuevo juego
  document.getElementById("reiniciar").setAttribute("disabled", true);
}

condicionesIniciales();
