var jogador1 = 0;
var jogador2 = 0;
var placar;

/*aninhamento de if - um if que tem vários outros ifs dentro
if (jogador1 != -1){
    if (jogador1 > 0) {
        console.log('jogador 1 marcou ponto');
    } else if (jogador2 > 0) {
        console.log('jogador 2 marcou ponto');
    } else {
        console.log('sem pontos ainda');
    }
}*/
//if ternário - if em uma linha só
/*
jogador1 != -1 && jogador2 != -1 ? console.log('os jogadores estão válidos'): console.log ('os jogadores não estão válidos');
    if (jogador1 > 0 && jogador2 == 0) {
        console.log('jogador 1 marcou ponto');
        placar = jogador1 > jogador2;
    } else if (jogador2 > 0 && jogador1 ==0) {
        console.log('jogador 2 marcou ponto');
        placar = jogador2 > jogador1;
    } else {
        console.log('sem pontos ainda');
    }

switch (placar) {
    case placar = jogador1 > jogador2:
         console.log('jogador 1 venceu com:',jogador1,'pontos');
         break;
    case placar = jogador2 > jogador1:
         console.log('jogador 2 venceu com:',jogador2,'pontos');
         break;
    default:
    console.log('Empate');
    break;
}
*/

//estruturas de repetição

let array = ['valor1','valor2','valor3','valor4','valor5'];

let object = {propriedade1: 'valor1',propriedade2: 'valor2',propriedade3: 'valor3'}

//For - executa uma instrução até que ela seja falsa
for (let indice = 0; indice < array.length; indice++){
    console.log(indice)
}

//For/in - executa uma repetição a partir de uma propriedade
//com array
for (let i in array){
    console.log(i);
}
//com objeto
for (i in object){
    console.log(i);
}
//For/off - executa repetição a partir de um valor
//com array
for (i of array){
    console.log(i);
}
//com objeto
for (i of object.propriedade1){
    console.log(i);
}

//while
var a = 0;
var b = 0;

while (a <= 10) {
    console.log(a);
    a++;
}
//do/while
do {
    console.log(b);
    b++;
} while (b <= 10);