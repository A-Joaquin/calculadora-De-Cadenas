import calculadoraCadena from "./calculadoraCadenas.js";

describe("Calcular numeros de una cadena", () => {
  it("deberia de devolver 0 para cadena vacia", () => {
    expect(calculadoraCadena("")).toEqual(0);
  });
  it("deberia de devolver 2 para cadena con 2", () => {
    expect(calculadoraCadena("2")).toEqual(2);
  });
});
