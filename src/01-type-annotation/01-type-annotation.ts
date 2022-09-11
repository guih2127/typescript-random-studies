/* eslint-disable */

// Tipos básicos
let nome: string = 'LUIZ';
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arraydeStrings: Array<string> = ['String1', 'String2'];
// ou
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeStrings2: string[] = ['String1', 'String2'];

// Objetos
let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  nome: 'Nome',
  idade: 12,
};

// Funções
function soma(x: number, y: number): number {
  return x + y;
}
// ou
const soma2: (x: number, y: number) => number = (x, y) => x + y;
