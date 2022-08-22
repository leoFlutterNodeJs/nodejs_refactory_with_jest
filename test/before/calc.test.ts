import { calculateRide } from "../../src/before/calc";

test('Deve calcular o valor da corrida em horario normal', function() {
    const fare = calculateRide([{distance: 10, date: new Date("2021-03-01T10:00:00")}]);
    expect(fare).toBe(21);
});

test('Deve calcular o valor da corrida em horario noturno', function() {
    const fare = calculateRide([{distance: 10, date: new Date("2021-03-01T23:00:00")}]);
    expect(fare).toBe(39);
});

test('Deve calcular o valor da corrida em horario Domingo', function() {
    const fare = calculateRide([{distance: 10, date: new Date("2021-03-07T10:00:00")}]);
    expect(fare).toBe(29);
});

test('Deve calcular o valor da corrida em horario Domingo noturno', function() {
    const fare = calculateRide([{distance: 10, date: new Date("2021-03-07T23:00:00")}]);
    expect(fare).toBe(50);
});

test('Deve calcular o valor da corrida minima', function() {
    const fare = calculateRide([{distance: 3, date: new Date("2021-03-01T10:00:00")}]);
    expect(fare).toBe(10);
});

test('Deve retorna -1 se a distanceancia for invalida', function() {
    expect(()=> calculateRide([{distance: -3, date: new Date("2021-03-01T10:00:00")}])).toThrow(new Error('Invalid Distance'))
});

test('Deve retorna -2 se a data for invalida', function() {
    expect(() => calculateRide([{distance: 3, date: new Date("abcdf")}])).toThrow(new Error("Invalid Date"));
});

test('Deve calcular o valor da corrida em múltiplos horários', function() {
    const fare = calculateRide([
        {distance: 10, date: new Date("2021-03-01T21:00:00")},
        {distance: 10, date: new Date("2021-03-01T22:00:00")},
    ]);
    expect(fare).toBe(60);
});
