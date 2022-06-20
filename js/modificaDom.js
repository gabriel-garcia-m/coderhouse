//Arreglo de mensajes de bienvenida
const mensajesBienvenida = [
  "¡Bienvenido a la Calculadora Meteorológica [version BETA - JavaScript CoderHouse], humano!",
  "¡Bienvenido a la Calculadora Meteorológica [version BETA - JavaScript CoderHouse], alienígena!",
  "¡Bienvenido a la Calculadora Meteorológica [version BETA - JavaScript CoderHouse], pisconauta!",
  "¡Bienvenido a la Calculadora Meteorológica [version BETA - JavaScript CoderHouse], explorador!",
];

//Se obtiene posicion aleatorio del arreglo
const mensajeAleatorio = Math.floor(Math.random() * mensajesBienvenida.length)

//Se obtiene el nodo bienvenida del documento meteorologia.html
let bienvenida = document.getElementById("bienvenida");
//Se modifica el contenido de texto del nodo bienvenida
bienvenida.innerText = mensajesBienvenida[mensajeAleatorio];


