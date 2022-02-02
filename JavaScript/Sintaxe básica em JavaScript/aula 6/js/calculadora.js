    function adicao (valor1, valor2){
       var resp;
        resp = valor1 + valor2;
        alert(`a Resposta desta adição é ${resp}`);
    }
    
    function subtracao (valor1, valor2){
        var resp;
        resp = valor1 - valor2;
        alert(`a Resposta desta subtração é ${resp}`);
    }
    
    function multiplicacao (valor1, valor2){
        var resp;
        resp = valor1 * valor2;
        alert(`a Resposta desta multiplicação é ${resp}`);
    }
    
    function divisao (valor1, valor2){
        var resp;
        resp = valor1 / valor2;
        alert(`a Resposta desta divisão é ${resp}`);
    }

function calculadora(){
    const operacao = Number(prompt ("Escolha uma operação:\n 1 - Adição\n 2 - Subtração\n 3- Multiplicação\n 4 - Divisão "));
    if (operacao < 1 || operacao > 4){
        alert('digite um número valido');
        calculadora();
    } else {

        let n1 = Number(prompt ('Insira o primeiro valor: '));
        let n2 = Number(prompt ('Insira o segundo valor: '));
        if (!n1 || !n2){
            alert("valor inválido - digitar apenas números");
            calculadora();
        }    
        else{
            /*
            if (operacao == 1){
                adicao(n1,n2);
            }else if (operacao == 2) {
                subtracao(n1,n2);
            }else if (operacao == 3) {
                multiplicacao(n1,n2);
            }else if (operacao == 4) {
                divisao(n1,n2);
            }*/
             switch (operacao) {
                case 1:
                    adicao(n1,n2);
                    break;
                case 2:
                    subtracao(n1,n2);
                    break;                
                case 3:
                    multiplicacao(n1,n2);
                    break;
                case 4:
                    divisao(n1,n2);
                    break;
            }
        }
    }
   
    }
    
    function novaoperacao (){
        let opcao = prompt ("deseja fazer uma nova operação ?\n 1 - Sim\n 2 - Não");

        if (opcao == 1){
            calculadora();
        } else{
            alert('até mais')
        }

    }
    
calculadora();
novaoperacao();