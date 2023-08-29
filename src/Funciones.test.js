import { devolverPrecioDeUnItem } from "./Funciones";

describe("Funciones", () => {
    it("deberia devolver el precio de un item", () => {
      expect(devolverPrecioDeUnItem(3)).toEqual(3);
    });
  });