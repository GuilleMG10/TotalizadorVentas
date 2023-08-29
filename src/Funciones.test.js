import { devolverPrecioDeUnItem , devolverPrecioNeto,devolverEstado,devolverCantidad} from "./Funciones";

describe("Funciones", () => {
    it("deberia devolver el precio de un item", () => {
      expect(devolverPrecioDeUnItem(3)).toEqual(3);
    });
    it("deberia devolver la cantidad de items ingresados", () => {
        expect(devolverCantidad(4)).toEqual(4);
      });
      it("deberia devolver el estado seleccionado", () => {
        expect(devolverEstado("CA")).toEqual("CA");
      });
      it("deberia devolver el precio neto", () => {
        expect(devolverPrecioNeto(3,2)).toEqual(6);
      });

  });