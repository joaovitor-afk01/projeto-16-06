
const dolar = 5.10;
let reais = parseFloat(prompt("Digite o valor em reais"));
let resultado = reais / dolar;

console.log(`O valor em dólares é U$ ${resultado.toFixed(2)}`);
alert(`O valor em dólares é U$ ${resultado.toFixed(2)}`);