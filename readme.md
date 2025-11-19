# Academy Monster - Gym Management API

API RESTful desenvolvida em Node.js utilizando **Fastify**, focada em alta performance e escalabilidade. A arquitetura do projeto segue os princípios de **Clean Architecture** e **Domain-Driven Design (DDD)**, garantindo desacoplamento entre camadas, testabilidade e facilidade de manutenção.

O sistema implementa casos de uso robustos para o gerenciamento de academias, abrangendo desde o controle de acesso (RBAC) e gestão de matrículas até o acompanhamento detalhado de métricas de progresso dos alunos. A integridade e consistência dos dados são asseguradas através de validações de schema com **Zod** e tipagem estática rigorosa com **TypeScript**, enquanto a persistência é gerenciada de forma eficiente pelo ORM **Prisma**.

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

| Categoria          | Tecnologias                                                                                                                                                                                                                                                                                                                                      |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Core**           | ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Fastify](https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white) |
| **Banco de Dados** | ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white) ![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)                                                                                                                               |
| **Testes**         | ![Vitest](https://img.shields.io/badge/-Vitest-252b3b?style=for-the-badge&logo=vitest&logoColor=white) ![Supertest](https://img.shields.io/badge/-Supertest-red?style=for-the-badge)                                                                                                                                                             |
| **Validação**      | ![Zod](https://img.shields.io/badge/Zod-3068b7?style=for-the-badge&logo=zod&logoColor=white)                                                                                                                                                                                                                                                     |

## ✨ Funcionalidades

- **Gerenciamento de Usuários**:
  - Criação de usuários (Alunos, Instrutores, Staff).
  - Atualização de dados do usuário.

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Você instalou a versão mais recente de `< nodejs >` (v22+ recomendado).
- Você instalou o gerenciador de pacotes `< pnpm >`.

## 🔧 Instalação

Para instalar o projeto, siga estas etapas:

```bash
# Clone o repositório
git clone <url-do-repositorio>

# Entre na pasta do projeto
cd api-gym-monster-nodejs

# Instale as dependências
pnpm install
```

## ⚙️ Configuração

Crie um arquivo `.env` na raiz do projeto com base no `.env.example` (ou use as configurações padrão para dev):

```env
DATABASE_URL="file:./dev.db"
NODE_ENV="dev"
```

Gere o cliente do Prisma:

```bash
npx prisma generate
```

## 🚀 Executando a aplicação

Para iniciar o servidor de desenvolvimento:

```bash
pnpm run start:dev
```

O servidor iniciará em `http://localhost:3333`.

Para visualizar o banco de dados com o Prisma Studio:

```bash
pnpm run studio
```

## 🧪 Testes

O projeto utiliza **Vitest** para testes unitários e de ponta a ponta (E2E).

### Rodar todos os testes

```bash
pnpm run test
```

### Rodar apenas testes unitários

```bash
pnpm run test:unit
```

### Rodar apenas testes E2E

```bash
pnpm run test:e2e
```

> **Nota**: Os testes E2E são configurados para rodar sequencialmente (`--fileParallelism=false`) para evitar conflitos no banco de dados SQLite.

## 🔄 CI/CD

Este projeto utiliza **GitHub Actions** para Integração Contínua (CI).

O workflow está configurado em `.github/workflows/ci.yml` e é acionado em:

- Push para a branch `main` (ou `master`).
- Pull Requests.

O pipeline executa:

1. Setup do ambiente (Node.js 24, pnpm).
2. Instalação de dependências.
3. Geração do Prisma Client.
4. Execução de todos os testes (`pnpm run test`).
