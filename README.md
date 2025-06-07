# Biox API - Gerenciamento de Receitas

API para gerenciamento de receitas culinárias.

---

## Tecnologias utilizadas

- Node.js
- NestJS
- TypeORM
- PostgreSQL
- Docker & Docker Compose
- Jest (para testes)

---

## Rodando o projeto com Docker

O projeto utiliza Docker Compose para orquestrar os containers da aplicação NestJS e do banco PostgreSQL.

### Passos para iniciar:

1. Clone o repositório:

git clone https://github.com/Erick-Verissim0/biox_test.git  

cd biox_test

## Como rodar o projeto com Docker

No diretório raiz do projeto (onde está o docker-compose.yml), execute:
docker-compose up --build

Esse comando irá:
Baixar a imagem do Postgres (se necessário)  
Construir a imagem do app Node/NestJS  
Subir os containers da aplicação e do banco PostgreSQL  
Aplicar migrations automaticamente
