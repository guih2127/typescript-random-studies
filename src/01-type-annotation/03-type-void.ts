function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Guilherme',
  sobrenome: 'Reis',
  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

pessoa.exibirNome();

semRetorno('A', 'B');

export { pessoa };

// É importante inferir o tipo dos parâmetros e do retorno, mesmo que o TS
// infira o tipo, ajuda muito na manutenção do código a longo prazo.
