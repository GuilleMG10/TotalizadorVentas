import { devolverPrecioDeUnItem , devolverCantidad} from "./Funciones";

describe("Funciones", () => {
    it("deberia devolver el precio de un item", () => {
      expect(devolverPrecioDeUnItem(3)).toEqual(3);
    });
    it("deberia devolver la cantidad de items ingresados", () => {
        expect(devolverCantidad(4)).toEqual(4);
      });
  });