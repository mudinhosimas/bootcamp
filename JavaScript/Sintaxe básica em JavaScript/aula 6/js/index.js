//função declarativa
function funcaodeclarativa(){
    console.log('sou uma função declarativa');
}
funcaodeclarativa();

//expressão de função
//nomeada
var funcaovariavel1 = function funcaovariavel1(){
    console.log('sou uma expressão de função com nomeação');
}
funcaovariavel1();
//sem nomeação
var funcaovariavel2 = function(){
    console.log('sou uma expressão de função sem nomeação');
}
funcaovariavel2();

//arrow function
var funcaoseta = () => {
    console.log('sou uma funcao seta');
}

funcaoseta();