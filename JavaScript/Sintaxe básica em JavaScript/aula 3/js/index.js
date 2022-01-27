//declarar array
let array = [1,'2','a'];
console.log(array )

//array dentro de array
let arraymaior = [1, 'a', true, ['array1'],['array2'],['array3']];
console.log(arraymaior);
//selecionando um indice dentro de um array
console.log(arraymaior[2]);

//forEach
array.forEach(function(item, index){console.log(item, index)});
//push
array.push('item novo')
console.log(array);
//pop
array.pop()
console.log(array);
//shift
array.shift();
console.log(array);
//unshift
array.unshift(1);
console.log(array);
//indexof
console.log(array.indexOf('2'));

arraymaior.splice(0,3);
console.log(arraymaior);

let novoarray = array.slice(0,2);
console.log(novoarray);

//objetos


