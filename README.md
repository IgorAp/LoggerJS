# LoggerJS

Esse repositório tem como objetivo ser um exemplo de como utilizar uma biblioteca de logs em um monorepo.
Os logs são armazenados utilizando o MongoDB, permitindo um acesso rápido e centralizado.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [License](#License)

## Features

- **Typescript**: superset javascript
- **Yarn workspaces**: Feature para organizar o monorepo
- **Pino**: Biblioteca de logs
- **Express**: Framework para aplicações Web
- **MongoDB**: Banco NoSQL para armazenamento dos logs

## Getting Started

### Installation

Clonando o repositório:

```bash
https://github.com/IgorAp/LoggerJS.git
cd loggerjs
```

Instalando as dependências:

```bash
yarn install
```

Configurando as variáveis de ambiente:

```bash
cd packages/api/
cp .env.example .env

# Abra o arquivo .env modiique as variáveis de acordo com o ambiente
```

### Commands

Rodando em modo desenvolvimento:

```bash
yarn workspace @loggerjs/api dev
```

Rodando em produção:

```bash
yarn workspace @loggerjs/api build
yarn workspace @loggerjs/api start
```

## License

[MIT](LICENSE)