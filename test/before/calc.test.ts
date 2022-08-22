import { calc } from "../../src/before/calc";

test('Deve calcular o valor da corrida em horario normal', function() {
    const result = calc([{dist: 10, ds: new Date("2021-03-01T10:00:00")}]);
    expect(result).toBe(21);
});