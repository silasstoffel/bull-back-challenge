# bull-back-challenge

Backend technical challenge from toro investimentos

# Requirements
 - [Docker](https://www.docker.com/)
 - [Docker Compose](https://docs.docker.com/compose)
 - [Node 18.15](https://nodejs.org/en/)

## About

Backend responsável por prover dados para SPA. Neste desafio, o user story escolhido foi a **TORO-001**.

Como não há cadastro de contas e como forma de auxiliar na operação, quando a aplicação subir ela irá gerar 4 contas para testes. Um dessas contas estará bloqueada.

**Conta bloqueada** é uma proposta extra para aumentar a segurança, no momento de autenticação efetuda pensei em enviar uma notificação (sms, push, email) para usuário dizendo que foi feita login e novo dispositivo onde ele pode não reconhecer o acesso e bloquear a conta. O bloqueio da conta em si não foi implementado é apenas uma proposta. Contas bloqueadas não podem acessar a plataforma.


Relação de contas para poder testar:

**Senha para acesso todos usuários: 123456**

```json
[
	{
		"id" : "b296c754-6a10-41ce-a333-1d4940acc1d4",
		"email" : "account1@bull.com.br",
		"cpf" : "0000000001",
		"blocked" : false,
		"createdAt" : "2023-03-11T03:17:47.083Z",
		"updatedAt" : "2023-03-11T03:17:47.083Z",
		"hash" : "$2b$08$pq31Mm91E7G4\/pEaZCfymu7fSqB4hIxrx50By5ThXAMm3wG4DPLju",
		"name" : "Account 1"
	},
	{
		"id" : "f71bf306-9e32-41f7-993d-e363d2f65b15",
		"email" : "account2@bull.com.br",
		"cpf" : "0000000002",
		"blocked" : false,
		"createdAt" : "2023-03-11T03:17:47.083Z",
		"updatedAt" : "2023-03-11T03:17:47.083Z",
		"hash" : "$2b$08$pq31Mm91E7G4\/pEaZCfymu7fSqB4hIxrx50By5ThXAMm3wG4DPLju",
		"name" : "Account 2"
	},
	{
		"id" : "6bc53670-8747-4245-bc6f-458cf735f476",
		"email" : "account3@bull.com.br",
		"cpf" : "0000000003",
		"blocked" : false,
		"createdAt" : "2023-03-11T03:17:47.083Z",
		"updatedAt" : "2023-03-11T03:17:47.083Z",
		"hash" : "$2b$08$pq31Mm91E7G4\/pEaZCfymu7fSqB4hIxrx50By5ThXAMm3wG4DPLju",
		"name" : "Account 3"
	},
	{
		"id" : "68e050f8-14ad-4a5a-99eb-97c22089ce04",
		"email" : "account4@bull.com.br",
		"cpf" : "0000000004",
		"blocked" : true,
		"createdAt" : "2023-03-11T03:17:47.083Z",
		"updatedAt" : "2023-03-11T03:17:47.083Z",
		"hash" : "$2b$08$pq31Mm91E7G4\/pEaZCfymu7fSqB4hIxrx50By5ThXAMm3wG4DPLju",
		"name" : "Account 4"
	}
]

```

## Setup

```shell
# it's necessary (required)
npm i
```

```shell
# linux/macOs
$ sh ./scripts/shell.sh
```
Helper para linux/macOs (já faz tudo o que precisa)
```shell
$ sh ./scripts/shell.sh
# it's already done. You should be able to access http://localhost:3001/health-check
```

Outros sistemas operacionais
```shell
$ docker-compose up -d
$ docker exec -it bull-back-api bash
```
## Tests

Execute os comandos:

```shell
$ docker exec -it bull-back-api bash

npm run test

# Testes com relatório de cobertura
npm run test:coverage
```


## Techs

Essa aplicação foi projetada seguindo alguns princípios e techs, tais como:

- Clean Architeture
- SOLID
- RESTfull
- Object Calisthenics
- Repositories
- Unit Tests
- Integration Tests

A idéia de seguir alguns princípios de clean Arch e poder desenvolver soluções que não fiquem tão  acompladas a framework, ORM, Client HTTP, banco de dados e etc. Em caso de mudança, exigirá esforço apenas para implementar os contratos (interfaces) no domínio.

