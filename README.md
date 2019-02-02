# Telzir

Fabricio Nogueira (nogsantos@gmail.com)

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

Run `dev` environment

```bash
$ npm run build:dev
```

#### Premisses

The ports `80` and `3000` will be used, to raise the containers, they can not be in use on host.

Run `prod` environment

```bash
$ npm run build:prod
```

Turn off `prod` environment

```bash
$ npm run build:down
```
