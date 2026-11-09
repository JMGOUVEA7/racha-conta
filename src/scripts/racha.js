import fs from 'node:fs';
import pc from 'picocolors';

const texto = fs.readFileSync('src/data/conta.json', 'utf-8');
const conta = JSON.parse(texto);

console.log('Racha-conta:', conta.restaurante);
console.log('Pessoas na mesa:', conta.pessoas);
console.log('Itens na conta:', conta.itens.length);
console.table(conta.itens);

const subtotal = conta.itens.reduce((total, item) => total + item.preco * item.quantidade, 0);
console.log('subtotal:', subtotal.toFixed(2))
// console.log(pc.bold('Racha-conta:'), conta.restaurante);


// Unidades pedidas auntidades de todso os itens
const UnidadesPedidas = conta.itens.reduce((total, item) => total + item.quantidade, 0);
console.log('Unidades pedidas: ', UnidadesPedidas)


const filtro = conta.itens.filter(numero => numero.preco > 50);
console.log('Itens acima de R$ 50: ',filtro.length)

