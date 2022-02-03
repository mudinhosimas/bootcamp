function verificaPalindromo(string){
    if (!string) return 'string não existe';
    // função abaixo divide a string em várias letras, depois inverte elas, e junta novamente para verificar se o valor é igual o da string que foi digitada
    return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo(''));