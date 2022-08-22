"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calc_1 = require("../../src/before/calc");
test('Deve calcular o valor da corrida em horario normal', function () {
    const result = (0, calc_1.calc)([{ dist: 10, ds: new Date("2021-03-01T10:00:00") }]);
    expect(result).toBe(21);
});
