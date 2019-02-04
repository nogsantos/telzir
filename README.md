# Telzir

Desafio Fabricio Nogueira (nogsantos@gmail.com).

#### Considerações

Minha pretensão inicial para realizar o desafio, era desenvolver uma PWA, server-side render com node e, também gostaria aproveitar oportunidade para testar e aprender uma lib, que dentre outros, possui esse propósito, [Markojs](https://markojs.com/), desenvolvida pela equipe do Ebay. Porém no meio do caminho, percebi que o tempo não seria suficiente para o aprendizado e um bom resultado no teste, dessa forma, migrei o projeto no front end para react e continuei utilizando o back end que já havia desenvolvido em node.

No back end, resolvi utilizar uma base de dados com mongo, estou utilizado o [mLab](https://mlab.com/).

No front end, como citado anteriormente, foi desenvolvido em react, está responsivo e dessa forma, espero estar de acordo com o item `"Para Web/Mobile"` sei que faltam alguns detalhes, mas tenho a esperança que o esforço seja válido.

Ainda sobre o _front_, Não consegui implementar os testes a contento. Com a decisão de migrar para react no meio do projeto, o tempo ficou pequeno para todo o que deveria ser feito, mas alguns testes foram feitos.

##### Estrutura do projeto

- /
  - scripts
    - Build / testes / dev
  - infra
    - Docker / configurações nginx
- api
  - Node
  - Mongo
- client
  - React

## Setup

Requirements

<table>
    <tbody>
        <tr>
            <th>Tool</th>
            <th>Min. Version</th>
            <th>Environment</th>
        </tr>
        <tr>
            <td>Node</td>
            <td>>= 10.x</td>
            <td>Dev | Prod</td>
        </tr>
        <tr>
            <td>Npm</td>
            <td>>= 5.x</td>
            <td>Dev | Prod</td>
        </tr>
        <tr>
            <td>Docker</td>
            <td>latest</td>
            <td>Prod</td>
        </tr>
        <tr>
            <td>docker-compose</td>
            <td>>= 1.23.1</td>
            <td>Prod</td>
        </tr>
    </tbody>
</table>

### Init and setup project

```bash
$ npm i
```

### Run `dev` environment

> #### Premisses
>
> The ports `3000` and `3001` will be used to start the servers, they can not be in use for another process at the moment.

Up

```bash
$ npm run build:dev
```

Down

```bash
$ ctrl + c
```

### Run `prod` environment

> #### Premisses
>
> The ports `80` and `3000` will be used, to raise the containers, they can not be in use on host.

Up

```bash
$ npm run build:prod
```

Down

```bash
$ npm run build:down
```

### Tests

Test All Api and Client

```bash
$ npm test
```

Test just Api

```bash
$ npm run build:test:api
```

Test just Client

```bash
$ npm run build:test:client
```
