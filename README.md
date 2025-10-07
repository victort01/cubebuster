# 🎬 API Cubebuster

Uma API REST completa para gerenciamento de **locadora de filmes**, construída com **Node.js**, **TypeScript**, **Express**, **Prisma**, **PostgreSQL** e **Zod**.

---

## 📋 Funcionalidades

- ✅ **Gerenciamento de Funcionários** — CRUD completo  
- ✅ **Gerenciamento de Clientes** — CRUD completo  
- ✅ **Gerenciamento de Filmes** — CRUD completo  
- ✅ **Gerenciamento de Gêneros** — CRUD completo  
- ✅ **Gerenciamento de Aluguéis** — CRUD completo com relacionamentos  
- ✅ **Gerenciamento de Endereços** — relacionamento 1:N com Clientes  
- ✅ **Validações robustas com Zod**  
- ✅ **Documentação com Swagger**  
- ✅ **Banco PostgreSQL via Prisma**

---

## 🛠️ Tecnologias

- **Node.js** + **TypeScript**  
- **Express.js** — Framework web  
- **Prisma ORM** — Conexão e manipulação de dados  
- **PostgreSQL** — Banco relacional  
- **Zod** — Validação de dados  
- **Swagger UI** — Documentação da API  

---

## 🚀 Como rodar o projeto

### Pré-requisitos

- Node.js (v18+)
- npm ou yarn
- PostgreSQL
- Git

---

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/victort01/cubebuster.git
cd cubebuster
```

---

### 2️⃣ Instale as dependências

```bash
npm install
```

---

### 3️⃣ Configure o banco de dados

Crie um banco PostgreSQL chamado **cubebuster** e configure o arquivo `.env`:

```env
PORT=3000
DATABASE_URL="postgresql://user:mypassword@localhost:5432/cubebuster?sslmode=disable"
```

---

### 4️⃣ Gere o Prisma Client

```bash
npx prisma generate
```

Para aplicar migrações (se houver):

```bash
npx prisma migrate dev
```

---

### 5️⃣ Inicie a aplicação

```bash
npm run dev
```

A API estará disponível em:  
👉 **http://localhost:3000**

---

## 📚 Documentação da API

### Swagger UI

Acesse:  
👉 **http://localhost:3000/api-docs**

---

## 🧩 Endpoints Principais

### 👤 Funcionários (`/funcionarios`)
- `POST /funcionarios` — Criar funcionário  
- `GET /funcionarios` — Listar todos  
- `GET /funcionarios/:id` — Buscar por ID  
- `PUT /funcionarios/:id` — Atualizar  
- `DELETE /funcionarios/:id` — Deletar  

---

### 👥 Clientes (`/clientes`)
- `POST /clientes` — Criar cliente  
- `GET /clientes` — Listar todos  
- `GET /clientes/:id` — Buscar por ID  
- `PUT /clientes/:id` — Atualizar  
- `DELETE /clientes/:id` — Deletar  

---

### 🏠 Endereços (`/enderecos`)
- `POST /enderecos` — Criar endereço  
- `GET /enderecos` — Listar todos  
- `GET /enderecos/:id` — Buscar por ID  
- `PUT /enderecos/:id` — Atualizar  
- `DELETE /enderecos/:id` — Deletar  

---

### 🎬 Filmes (`/filmes`)
- `POST /filmes` — Criar filme  
- `GET /filmes` — Listar todos  
- `GET /filmes/:id` — Buscar por ID  
- `PUT /filmes/:id` — Atualizar  
- `DELETE /filmes/:id` — Deletar  

---

### 🎭 Gêneros (`/generos`)
- `POST /generos` — Criar gênero  
- `GET /generos` — Listar todos  
- `GET /generos/:id` — Buscar por ID  
- `PUT /generos/:id` — Atualizar  
- `DELETE /generos/:id` — Deletar  

---

### 🎞️ Aluguéis (`/alugueis`)
- `POST /alugueis` — Criar aluguel  
- `GET /alugueis` — Listar todos  
- `GET /alugueis/:id` — Buscar por ID  
- `PUT /alugueis/:id` — Atualizar  
- `DELETE /alugueis/:id` — Deletar  

> O aluguel inclui informações do cliente, filme e funcionário por meio do `include` do Prisma.

---

## ⚙️ Validações com Zod

A API possui validações robustas com **Zod**:

- **Nome:** obrigatório e mínimo de 3 caracteres  
- **Email:** formato válido obrigatório  
- **CPF:** exatamente 11 dígitos numéricos  
- **Senha:** mínimo de 6 caracteres  
- **Telefone:** opcional (10-15 caracteres)  
- **IDs:** números inteiros positivos  
- **Datas:** campos `dataAluguel` e `dataDevolucao` validados conforme o tipo  

---

## 📦 Scripts Disponíveis

```bash
npm run dev       # Inicia em modo desenvolvimento
npm run build     # Build para produção
npm start         # Executa a versão de produção
npx prisma studio # Abre o Prisma Studio
```

---

## 👨‍💻 Autor

**Paulo Victor**  
GitHub: [@victort01](https://github.com/victort01)

---
