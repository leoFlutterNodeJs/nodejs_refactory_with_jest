"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calc_1 = require("../../src/before/calc");
test('Deve calcular o valor da corrida em horario normal', function () {
    const result = (0, calc_1.calc)([{ dist: 10, ds: new Date("2021-03-01T10:00:00") }]);
    expect(result).toBe(21);
});
test('Deve calcular o valor da corrida em horario noturno', function () {
    const result = (0, calc_1.calc)([{ dist: 10, ds: new Date("2021-03-01T23:00:00") }]);
    expect(result).toBe(39);
});
test('Deve calcular o valor da corrida em horario Domingo', function () {
    const result = (0, calc_1.calc)([{ dist: 10, ds: new Date("2021-03-07T10:00:00") }]);
    expect(result).toBe(29);
});
test('Deve calcular o valor da corrida em horario Domingo noturno', function () {
    const result = (0, calc_1.calc)([{ dist: 10, ds: new Date("2021-03-07T23:00:00") }]);
    expect(result).toBe(50);
});
test('Deve calcular o valor da corrida minima', function () {
    const result = (0, calc_1.calc)([{ dist: 3, ds: new Date("2021-03-01T10:00:00") }]);
    expect(result).toBe(10);
});
test('Deve retorna -1 se a distancia for invalida', function () {
    const result = (0, calc_1.calc)([{ dist: -3, ds: new Date("2021-03-01T10:00:00") }]);
    expect(result).toBe(-1);
});
test('Deve retorna -2 se a data for invalida', function () {
    const result = (0, calc_1.calc)([{ dist: 3, ds: new Date("abdds") }]);
    expect(result).toBe(-2);
});
