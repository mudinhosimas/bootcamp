function verificanum(valor1, valor2){
    var verificavalor = valor1 == valor2;
    if (!valor1 || !valor2){
        alert("digite apenas números!");
    }else{
        if (verificavalor == true) {
            alert(`o número ${valor1} é igual ao número ${valor2}`);
        }
        else {
            alert(`o número ${valor1} não é igual ao número ${valor2}`);
        }
        var somaresp = valor1 + valor2;

        if (somaresp < 10 && somaresp < 20){
            alert(`Sua soma é de ${somaresp} e o valor é menor que 10 e 20`);
        }else if (somaresp >= 10 && somaresp < 20) {
            alert(`Sua soma é de ${somaresp} e o valor é maior ou igual a 10 e menor que 20`);
        } else if( somaresp > 10 && somaresp >= 20){
            alert(`Sua soma é de ${somaresp} e o valor é maior que 10 e maior ou igual a 20`);
        }
    }
}
var n1 = Number(prompt('Digite o primeiro valor: '));
var n2 = Number(prompt('Digite o segundo valor: '));
verificanum(n1,n2);