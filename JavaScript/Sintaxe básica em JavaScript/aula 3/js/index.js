//declarar array
let array = [1,'2','a'];
console.log(array);

//array dentro de array
let arraymaior = [1, 'a', true, ['array1'],['array2'],['array3']];
console.log(arraymaior);
//selecionando um indice dentro de um array
console.log(arraymaior[2]);

//forEach() - Itera um array
array.forEach(function(item, index){console.log(item, index)});
//push() - Adiciona um item no fim do array
array.push('item novo');
console.log(array);
//pop() - remove item do fim do array
array.pop();
console.log(array);
//shift - remove item do inicio do array
array.shift();
console.log(array);
//unshift - adiciona item no inicio do array
array.unshift(1);
console.log(array);
//indexof - fala em qual posição está algum item
console.log(array.indexOf('2'));
//splice - remove ou substitui um item pelo indice
arraymaior.splice(0,3);
console.log(arraymaior);
// retorna os indices selecionados
let novoarray = array.slice(0,2);
console.log(novoarray);

//objetos

let object = {String: 'String', number: 1, Boolean: true, arrayobj: ["arraydentro"], objinterno: {objetointerno2: 'objinternomesmo'} };
console.log(object)

console.log(object.objinterno);

var string = object.String;
console.log(string);

let arrayinterno = object.arrayobj;
console.log(arrayinterno);

var {String, Boolean, arrayobj} = object;
console.log(String,Boolean, arrayobj);