// tipos primitivos

// boolean
var TF = true;
console.log(typeof(TF), TF);

//numero
var numero = 3;
console.log(typeof(numero), numero);

//string
var nome = 'mudinho';
console.log(typeof(nome), nome);

//função
var funcao = function() { }
console.log(typeof(funcao));

//como declarar
//para escopo global
var variavel = 'mudinho';
console.log(variavel);
//para escopo local
let variavel2 = 'simas';
console.log(variavel2);
//quando o valor é fixo
const valorconst = 0;
console.log(valorconst);

var escopoglobal = 'global';
console.log(escopoglobal);

function escopolocal () {
    let escopolocal = 'local';
    console.log(escopolocal);
}

escopolocal();

//atribuição: o simbolo de = significa que uma variável esta recebendo um valor

//comparação: 2 simbolos de == significa uma comparação de 2 valores. exemplo abaixo

var compara;
compara = 0 == '0';
console.log(compara);

//comparação identica: 3 simbolos de === significa uma comparação tanto de valor quanto de tipo de variável. exemplo abaixo

var valor1 = 0;
var valor2 = '0';
var comparatipo;

comparatipo = valor1 === valor2;

console.log(comparatipo);

//adição
var soma = 1 + 1;
console.log(soma);

//subtração
var sub = 1 - 1;
console.log(sub);

//multiplicação
var multi = 2 * 2;
console.log(multi);

//divisão
var div = 6 / 3;
console.log(div);

//resto de divisão
var restdiv = 5 % 2;
console.log(restdiv);

//potenciação
var pot = 5 ** 2;
console.log(pot);

// maior >
// maior ou igual >=
// menor <
// menor ou igual <=

// && 'e' precisa de todos os valores verdadeiros para ser verdadeiro
// || 'ou' precisa que algum valor seja verdadeiro para ser verdadeiro
// ! 'não' inverte o valor de verdadeiro pra falso ou falso para verdadeiro