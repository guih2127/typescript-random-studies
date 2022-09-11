// O tipo never deve ser utilizado em casos de valores que nunca serão retornados
// ou também em tratamento de exceções. Ele funciona como o tipo void, porém
// mais específico.
function criaErro(): never {
  throw new Error('Erro qualquer!');
}
