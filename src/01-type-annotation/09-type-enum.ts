// Enums permitem definir um conjunto de constantes nomeadas
// Em vários casos, eles podem facilitar a leitura do nosso código.
// Enum numérico
enum Cores {
  VERMELHO, // 0
  AZUL, // 1
  AMARELO, // 2
}

enum Cores {
  ROXO = 10,
}
// Podemos declarar o mesmo enum duas vezes e nesse caso, eles são mergeados.

// Enum numérico com os valores definidos
enum Cores2 {
  VERMELHO = 10,
  AZUL = 20,
  AMARELO = 30,
}

// console.log(Cores);
// console.log(Cores.VERMELHO);
// console.log(Cores2.VERMELHO);
// console.log(Cores.ROXO);

// // Podemos acessar por chaves
// console.log(Cores[0]);
// console.log(Cores2[10]);

function escolheACor(cor: Cores): void {
  console.log(cor);
  console.log(Cores[cor]);
}

escolheACor(23232); // a verificação de tipo de enum do TS é um pouco falha,
// nos permitindo fazer algo assim

escolheACor(Cores.AMARELO);
