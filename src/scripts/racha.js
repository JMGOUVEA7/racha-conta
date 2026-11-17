import fs from "node:fs";
import pc from "picocolors";
import {
  paraCentavos,
  calcularGorjeta,
  formatarReais,
  lerValor,
  lerPessoas
} from "../regras/conta.js";

const texto = fs.readFileSync("src/data/conta.json", "utf-8");
const conta = JSON.parse(texto);
const subtotal = conta.itens.reduce(
  (total, item) => total + item.preco * item.quantidade,
  0,
);

// título
console.log("Racha-conta:", conta.restaurante);

// Pessoas
let pessoas = conta.pessoas;
if (process.argv[3]) {
  pessoas = lerPessoas(process.argv[3]);
}

if (pessoas === null) {
  console.log(`Número de pessoas inválido: "${process.argv[3]}". Digite um número inteiro de 1 a 50.`);
} else {

  // DECLARAÇÃO DAS VARIÁVEIS

  // subtotal centavos
  let subtotalCentavos = paraCentavos(subtotal);
  if (process.argv[2]) {
    subtotalCentavos = lerValor(process.argv[2]);
  }

  const gorjetaCentavos = calcularGorjeta(subtotalCentavos, conta.gorjeta);
  const totalCentavos = subtotalCentavos + gorjetaCentavos;
  const Total = formatarReais(totalCentavos);
  const porPessoa = Math.floor(totalCentavos / pessoas);
  const sobra = totalCentavos % pessoas;
  const filtro = conta.itens.filter((numero) => numero.preco > 50);

  // Unidades pedidas quantidades de todos os itens
  const UnidadesPedidas = conta.itens.reduce(
    (total, item) => total + item.quantidade,
    0,
  );

  // IMPRIMIR RESULTADOS

  // título
  console.log(pc.bold('Racha-conta:'), conta.restaurante);

  //quantidade de pessoas
  console.log('Pessoas na mesa:', pessoas);

  // itens na conta
  console.log("Itens na conta:", conta.itens.length);

  // tabela de itens
  console.table(conta.itens);

  console.log(`Subtotal: ${formatarReais(subtotalCentavos)}`);

  console.log(`Gorjeta (${conta.gorjeta}%): ${formatarReais(gorjetaCentavos)}`);

  console.log(`Total: ${Total}`);

  console.log(`Unidades pedidas: ${UnidadesPedidas}`);

  console.log("Itens acima de R$ 50: ", filtro.length);

  console.log(`Por pessoa: ${formatarReais(porPessoa)}`);

  console.log(`Centavos que sobram: ${Math.round(sobra)}`,);
}

