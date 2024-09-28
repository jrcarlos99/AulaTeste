/* Nome e Idade*/
var nome = "João"
var idade ="25"
console.log("Olá, meu nome é"+" "+nome, "e eu tenho"+" "+idade, "anos")

myName = "Joao";
myCity ="Recife";
console.log(`${myName} é de ${myCity}`)


/* Operação Matemática*/

let num1 = prompt("Digite o número ")
let num2 = prompt("Digite outro número ")
const soma = parseInt(num1)+parseInt(num2);
console.log("A soma é:" + soma);

let num3 = prompt("Digite o número ")
let num4 = prompt("Digite outro número ")
const sub = parseInt(num3)-parseInt(num4);
console.log("O resultado é: "+sub);


let num5 = prompt("Digite o número ")
let num6 = prompt("Digite outro número ")
const mult = parseInt(num5)*parseInt(num6);
console.log("O resultado é: "+mult);


let num7 = prompt("Digite o número ")
let num8 = prompt("Digite outro número ")
const dividir = parseInt(num7)/parseInt(num8);
console.log("O resultado é: "+dividir);

//Boletim//

let nota1 = parseInt(prompt("Insira a nota1: "))
let nota2 = parseInt(prompt("Insira a nota2: "));
let nota3 = parseInt(prompt("Insira a nota3: "));

let mediaI =parseInt(((nota1 + nota2 + nota3) /3).toFixed(2))


console.log(mediaI);


//Área do Triângulo

let base = prompt("Digite a base")
let altura = prompt("Digite a altura")
let area = (base*altura)/2

console.log("A área do triângulo é:" + area);

//Calcular Descontos

let precooriginal = prompt("Digite o Preço Original")
let desconto = prompt("Digite a percentual do desconto")
let precofinal = precooriginal - (precooriginal * desconto/100)
console.log("O preço final é: R$ "+ precofinal.toFixed(2));


//Imposto de Rendas

const salario = 1000;
console.log("Você está isento de pagar imposto de renda");

const salario2 = 2500;
const impostoRenda2 = 0.075;
const Deducao2 = 169.44;
const salarioliquido2 = salario2 * impostoRenda2 - Deducao2;
console.log(`O salário liquido é $(salarioLiquido2)`);


const salario3 = 3500;
const impostoRenda3 = 0.15;
const Deducao3 = 381.44;
const salarioLiquido3 = salario3 * impostoRenda3 - Deducao3;
console.log(`O salário liquido é $(salarioLiquido3)`);

const salario4 = 4000;
const impostoRenda4 = 0.225;
const Deducao4 = 662.77
const salarioLiquido4 = salario4 * impostoRenda4 - Deducao4;
console.log(`O salário liquido é $(salarioLiquido4)`);



//Conversor de Moedas
let valorReal = parseInt(prompt("Digite o valor em reais"));
let cotacaoDolar = 5.40;
let valorDolar = valorReal / cotacaoDolar;
console.log(`O valor em dolar é: ${valorDolar.toFixed(2)}`);


//Conversor de Celsius para Fahrenheit

let tempCel = parseInt(prompt("Digite a temperatura em Celsius "));
const temperaturaFah = tempCel * 9/5 + 32
console.log("A temperatura em Fahrenheit é: "+ temperaturaFah);


//Calculadora IMC
const peso = parseFloat(prompt("Digite o seu peso"));
const altura = parseFloat(prompt("Digite a sua altura"));
const imc = peso / (altura * altura);
  if (imc < 16.9) {
      console.log("Muito abaixo do peso");
  } else if (imc >= 17 && imc <= 18.4 ) {
  console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc <= 24.9 ) {
  console.log("Peso Normal");
} else if (imc >= 25 && imc <= 29.9) {
  console.log ("Acima do Peso");
} else if (imc >= 30 && imc <= 34.9 ){
  console.log ("Obesidade Grau I");
} else if (imc >= 35 && imc <= 39.9 ) {
  console.log ("Obesidade Grau II");
} else if (imc >= 40 ) {
  console.log ("Obesidade Grau III");
}


console.log(`O seu IMC é: ${imc.toFixed(2)}`)

