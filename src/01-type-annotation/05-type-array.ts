// Array<T> = T[]
export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((acc, valor) => acc * valor, 1);
}

const result = multiplicaArgs(1, 2, 3);
// o TS consegue inferir sozinho o tipo da variável a partir do retorno da função.
console.log(result);

export function concatenaString(...args: string[]): string {
  return args.reduce((acc, valor) => acc + valor);
}

const concatenacao = concatenaString('String 1', 'String 2');
console.log(concatenacao);
