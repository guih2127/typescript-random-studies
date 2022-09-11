const objetoA: {
  chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown; // Podemos usar essa index signature, caso precisemos criar mais chaves
  // para o objeto
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveA = 'Outro Valor';
// objetoA.chaveC = "Novo valor" -- Não é possível fazer, pois a propriedade chave C não existe
// objetoA.chaveA = 4; -- Não é possível fazer, pois definimos que o valor será uma string

console.log(objetoA);
objetoA.c;
