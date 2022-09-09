# Typescript e compilação

O Typescript é um SUPERSET do Javascript. Quando instalamos o Typescript,
estamos adicionando novas funcionalidades ao Javascript. O código Typescript
precisa ser COMPILADO para Javascript puro, para só então ser executado
pelo Node ou pelo navegador.

# Tipagem estática

O Typescript adiciona tipagem estática ao Javascript, isso ajuda em várias
situações onde precisamos, normalmente, fazer alguma verificação de tipos, pois
com o Typescript conseguimos prever vários dos erros no próprio desenvolvimento.
Por exemplo, se quisermos passar uma string pra uma função que recebe um number,
dependendo do nosso arquivo de configuração (ts-config), o código nem mesmo compilaria.

# Novos recursos

O Typescript adiciona novos recursos à linguagem, como Interfaces e modificadores
de acesso (public e private, readonly). Esses recursos só são válidos na
hora do desenvolvimento, pois como já foi dito anteriormente, na hora da
compilação do código, esse código é convertido para Javascript.

# Ambiente de desenvolvimento

Antes de começarmos o desenvolvimento em Typescript, é legal configurarmos o
ESLint e o Prettier, para prevernirmos erros e problemas no código e também
para mantermos uma formatação padrão.

# TSConfig

O arquivo Tsconfig indica que o diretório é raíz de um projeto Typescript.
Ele especifica os arquivos raíz e também as opções de compilação para compilar
o projeto. Projetos Javascript podem usar um JSConfig, com a mesma proposta
do TSConfig.
