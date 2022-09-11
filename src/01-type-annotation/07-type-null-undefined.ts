let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(
  firstName: string,
  lastName?: string, // parametros. last name pode ser string ou undefined
): {
  firstName: string;
  lastName?: string; // type-annotation
} {
  return {
    firstName: firstName,
    lastName: lastName,
  }; // corpo da função
}

// com parametros opcionais, precisamos fazer a checagem do valor, se ela
// é undefined ou não.
// o undefined acontece quando uma variavel não foi definido ainda.

export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}
// nessa função, por exemplo, verificamos o tipo dela para fazer nosso retorno

// Undefined: Uma variavel é undefined quando ela não foi atribuida após ter sido
// declarada. Ou seja, se declararmos um parametro como opcional e não passarmos
// um valor, ela será undefined. (string | undefined) por ex.
// Null: Null se refere a valor que não existe ou é vazio, ou seja, quer dizer
// sem valor. Para fazer uma variável null precisamos atribuir o valor null,
// pois por padrão o TS coloca variáveis não atribuidas como undefined.
