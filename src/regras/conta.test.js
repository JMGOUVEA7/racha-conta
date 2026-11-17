import { 
  calcularGorjeta, 
  paraCentavos, 
  formatarReais, 
  lerValor, 
  lerPessoas 
} from './conta.js';


//teste do calcularGorjeta

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


// teste do paraCentavos

test.each([
  [187.5, 18750],
  [72.9, 7290],
])('paraCentavos %d dá %i', (reais, esperado) => {
  expect(paraCentavos(reais, esperado)).toBe(esperado);
});

test('paraCentavos %d dá i%', () => {
  expect(paraCentavos(0.1 + 0.2)).toBe(30);
});


// Teste do formatarReais

test.each([
  [18750, 'R$ 187,50'],
  [5, 'R$ 0,05'],
])('formatarReais %i dá %s', (centavos, esperado) => {
  expect(formatarReais(centavos, esperado)).toBe(esperado);
});


// teste do lerValor

test.each([
  ['187,50', 18750],
  ['R$ 187,50', 18750],
  ['R$187,50', 18750],
  ['  187,5 ', 18750],
  ['187.50', 18750],
  ['187', 18700],
])('lerValor("%s") dá %i', (texto, esperado) => {
  expect(lerValor(texto)).toBe(esperado);
});


// teste do lerPessoas

test.each([
  ['4', 4],
  [' 4 ', 4],
  ['1', 1],
  ['50', 50],
])('lerPessoas("%s") dá %i', (texto, esperado) => {
  expect(lerPessoas(texto)).toBe(esperado);
});

test.each(['', '0', '51', '2,5', '-3', 'três'])('lerPessoas("%s") dá null', (texto) => {
  expect(lerPessoas(texto)).toBe(null);
});
