## Desafio Pokémon

Nós temos um problema, atualmente nosso sistema é só um excel, cheio de informações sobre Pokémon. Nós usamos ele como banco de dados e ao mesmo tempo interface de gerenciamento, inserindo, editando, deletando e filtrando os dados.

A missão é criar um sistema para substituir este excel, pois queremos expandir e acrescentar funcionalidades. Queremos manter o básico, mas principalmente queremos uma forma prática e agradável de buscar os dados, com listagem, filtros, paginação e detalhes sobre cada Pokémon.

Fique à vontade com o layout, precisamos de uma interface que consiga entregar as funcionalidades principais e substituir o excel, só isso.


## Passo a Passo

* [ ] Fazer clone deste repositorio
* [ ] Instalar as dependências
  * [ ] Crie um arquivo .env na raiz do projeto
  * [ ] Coloque a variável de ambiente como está no .end-public
* [ ] Iniciar o servidor
 
```console
$ yarn install      # instala as dependências
$ yarn start        # inicia o servidor
$ yarn dev        # inicia o servidor no modo de desenvolvimento
```

## Padrão de rotas

- GET

1. '/v1/', Rota raiz onde mosta o nome do Projeto e a sua Versão atual.
2. '/v1/pokemon', Rota que mostra todos os Pokemons já cadastrados. 
3. '/v1/pokemon/:id', Rota que mostra um unico pokemon referenciada ao seu id.

- POST
1. '/v1/pokemon/register', Rota que registra um novo pokemon.
