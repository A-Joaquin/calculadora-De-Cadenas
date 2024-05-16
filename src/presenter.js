import sumarNumerosDe from "./sumarNumerosDeCadena.js";

const cadena = document.querySelector("#cadena");
const form = document.querySelector("#calcular-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // No necesitas convertir la cadena a un entero, ya que es una cadena
  const cadenaNumeros = cadena.value;

  // Cambia String.parseInt por parseInt
  div.innerHTML = "<p> suma de numeros: " + sumarNumerosDe(cadenaNumeros) + "</p>";
});
