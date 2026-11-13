import { calcularGorjeta } from './conta.js';

test('gorjeta de 10% sobre R$ 187,50 é R$ 18,75', () => {
  expect(calcularGorjeta(18750, 10)).toBe(1875);
});

test.each([
  [18750, 10, 1875],
  [3330, 15, 500],
  [18755, 10, 1876],
  [8000, 0, 0],
])('calcularGorjeta(%i, %i) dá %i', (subtotal, percentual, esperado) => {
  expect(calcularGorjeta(subtotal, percentual)).toBe(esperado);
});

test('sem o percentual, a gorjeta é de 10%', () => {
  expect(calcularGorjeta(18750)).toBe(1875);
});
