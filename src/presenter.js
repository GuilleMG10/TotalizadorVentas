import { devolverPrecioDeUnItem } from "./Funciones";
import { devolverCantidad } from "./Funciones";
import { devolverEstado } from "./Funciones";

const Fprecio = document.querySelector("#precio-item");
const Fcantidad = document.querySelector("#cantidad-item");
const Festado = document.querySelector("#estados");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const precio = Number.parseInt(Fprecio.value);
  const cantidad = Number.parseInt(Fcantidad.value);
  const estado=Festado.value;


  div.innerHTML = "<p>" + devolverPrecioDeUnItem(precio) + "</p>";
  div.innerHTML += "<p>" + "Cantidad de ítems: " + devolverCantidad(cantidad) + "</p>";
  div.innerHTML += "<p>" + "Código de estado: " + devolverEstado(estado) + "</p>";

});
