import { devolverPrecio } from "./Funciones";

const Fprecio = document.querySelector("#precio-item");

const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const precio = Number.parseInt(Fprecio.value);

  div.innerHTML = "<p>" + devolverPrecio(precio) + "</p>";
});
