import calculadoraCadena from "./calculadoraCadenas.js";

describe("Calcular numeros de una cadena", () => {
  it("deberia de devolver 0 para cadena vacia", () => {
    expect(calculadoraCadena("")).toEqual(0);
  });
});
