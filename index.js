const prompt = require('prompt-sync')();

var nome = parseFloat(prompt('Digite seu nome: '));
var salario_bruto = prompt('Digite seu salário bruto: ');

if (salario_bruto > 0 && salario_bruto <= 1903.98) {
  var ir = salario_bruto * 0.05;
} else if (salario_bruto <= 2826.65) {
  var ir = salario_bruto * o.o75;
} else {
  var ir = salario_bruto * 0.15;
}

var salario_liquido = salario_bruto - ir;
console.log("Salário líquido: R$", salario_liquido);
