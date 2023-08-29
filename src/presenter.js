import { devolverPrecio } from "./Funciones";

const Fprecio = document.querySelector("#precio-item");
const Fcantidad = document.querySelector("#cantidad-item");

const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const precio = Number.parseInt(Fprecio.value);
  const cantidad = Number.parseInt(Fcantidad.value);


  div.innerHTML = "<p>" + devolverPrecio(precio) + "</p>";
  div.innerHTML += "<p>" + "Cantidad de ítems: " + devolverCantidad(cantidad) + "</p>";
});
