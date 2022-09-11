// Tuplas são tipos compostos de dois ou mais propriedades.
const dadosCliente1: [number, string] = [1, 'Luiz'];
const dadosCliente2: [number, string, string?] = [1, 'Luiz'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Luiz', 'Miranda'];
// podemos utilizar o rest operator, fazendo com que a tupla seja praticamente um array
// com tipos especificos definidos por nós.

// dadosCliente1[0] = 'Não sei'; // não funciona, pois definimos como number

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente4);
