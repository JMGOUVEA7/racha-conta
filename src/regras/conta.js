// função que transforma reais em centavos
export function paraCentavos(reais) {
    return Math.round(reais * 100)
}

// função calcula a gorjeta
export function calcularGorjeta(subtotal, percentual = 10) {
    return Math.round(subtotal * percentual / 100)
}

// função que transforma e formata centavos para reais
export function formatarReais(centavos){
    return `R$ ${(centavos / 100).toFixed(2).replace('.', ',')}`
}

// função que transforma uma string em um número para conseguir ler
export function lerValor(texto) {
  let limpo = texto.trim();
  limpo = limpo.replace('R$', '');
  limpo = limpo.trim();
  limpo = limpo.replace(',', '.');
  return paraCentavos(Number(limpo));
}

// função que transforma em centavos
export function lerPessoas(texto) {
  const pessoas = Number(texto.trim());
  if (Number.isInteger(pessoas) && pessoas >= 1 && pessoas <= 50) {
    return pessoas;
  }
  return null;
}
