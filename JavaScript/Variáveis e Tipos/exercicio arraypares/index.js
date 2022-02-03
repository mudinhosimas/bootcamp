function subistituiPares (array) { 
    if (!array.length) return -1;

    for (let i = 0; i < array.length; i++){
        if (array[i] === 0) {
            console.log("você ja é igual a zero");
        } else if (array[i] % 2 === 0) {
            console.log(`Substituindo ${array[i]} por 0`);
            array[i] = 0;
        }
    }
    
    return array;
}

let array = [1,2,3,5,6,7,9,11,12];
console.log(subistituiPares([]));