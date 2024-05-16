import sumarNumerosDe from "./sumarNumerosDeCadena.js";

const Inputcadena = document.querySelector("#cadena");
const formCalcular = document.querySelector("#calcular-form");
const divResultado = document.querySelector("#resultado-div");

formCalcular.addEventListener("submit", (event) => {
  event.preventDefault();


  const cadena = Inputcadena.value;


  divResultado.innerHTML = "<p> suma de numeros: " + sumarNumerosDe(cadena) + "</p>";
});
