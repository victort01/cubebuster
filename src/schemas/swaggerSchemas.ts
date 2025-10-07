/**
 * @swagger
 * components:
 *   schemas:
 *     # ============================================================
 *     # GÊNERO
 *     # ============================================================
 *     Genero:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID do gênero
 *           example: 1
 *         nome:
 *           type: string
 *           description: Nome do gênero
 *           example: Ação
 *       required:
 *         - nome
 *
 *     GeneroCreate:
 *       type: object
 *       properties:
 *         nome:
 *           type: string
 *           description: Nome do gênero
 *           example: Comédia
 *       required:
 *         - nome
 *
 *     GeneroUpdate:
 *       type: object
 *       properties:
 *         nome:
 *           type: string
 *           description: Novo nome do gênero
 *           example: Suspense
 *
 *     # ============================================================
 *     # FILME
 *     # ============================================================
 *     Filme:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID do filme
 *           example: 1
 *         titulo:
 *           type: string
 *           description: Título do filme
 *           example: Matrix
 *         generoId:
 *           type: integer
 *           description: ID do gênero vinculado
 *           example: 1
 *         anoLancamento:
 *           type: integer
 *           description: Ano de lançamento do filme
 *           example: 1999
 *         quantidade:
 *           type: integer
 *           description: Quantidade disponível em estoque
 *           example: 5
 *         classificacao:
 *           type: string
 *           description: Classificação indicativa
 *           example: "14 anos"
 *       required:
 *         - titulo
 *         - generoId
 *         - anoLancamento
 *         - quantidade
 *
 *     FilmeCreate:
 *       type: object
 *       properties:
 *         titulo:
 *           type: string
 *           example: "Matrix"
 *         generoId:
 *           type: integer
 *           example: 1
 *         anoLancamento:
 *           type: integer
 *           example: 1999
 *         quantidade:
 *           type: integer
 *           example: 5
 *         classificacao:
 *           type: string
 *           example: "16 anos"
 *       required:
 *         - titulo
 *         - generoId
 *         - anoLancamento
 *         - quantidade
 *
 *     FilmeUpdate:
 *       type: object
 *       properties:
 *         titulo:
 *           type: string
 *           example: Matrix Reloaded
 *         generoId:
 *           type: integer
 *           example: 1
 *         anoLancamento:
 *           type: integer
 *           example: 2003
 *         quantidade:
 *           type: integer
 *           example: 3
 *         classificacao:
 *           type: string
 *           example: "14 anos"
 *
 *     # ============================================================
 *     # CLIENTE
 *     # ============================================================
 *     Cliente:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         nome:
 *           type: string
 *           example: João da Silva
 *         email:
 *           type: string
 *           example: joao@email.com
 *         cpf:
 *           type: string
 *           example: "12345678901"
 *         telefone:
 *           type: string
 *           example: "11999999999"
 *         dataNascimento:
 *           type: string
 *           format: date
 *           example: "1990-05-15"
 *         enderecoId:
 *           type: integer
 *           example: 2
 *       required:
 *         - nome
 *         - email
 *         - cpf
 *         - dataNascimento
 *
 *     ClienteCreate:
 *       type: object
 *       properties:
 *         nome:
 *           type: string
 *           example: João da Silva
 *         email:
 *           type: string
 *           example: joao@email.com
 *         cpf:
 *           type: string
 *           example: "12345678901"
 *         telefone:
 *           type: string
 *           example: "11999999999"
 *         dataNascimento:
 *           type: string
 *           format: date
 *           example: "1990-05-15"
 *         enderecoId:
 *           type: integer
 *           example: 2
 *       required:
 *         - nome
 *         - email
 *         - cpf
 *         - dataNascimento
 *
 *     ClienteUpdate:
 *       type: object
 *       properties:
 *         nome:
 *           type: string
 *           example: João A. da Silva
 *         telefone:
 *           type: string
 *           example: "11888888888"
 *         enderecoId:
 *           type: integer
 *           example: 3
 *
 *     # ============================================================
 *     # FUNCIONÁRIO
 *     # ============================================================
 *     Funcionario:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         nome:
 *           type: string
 *           example: Ana Souza
 *         email:
 *           type: string
 *           example: ana@email.com
 *         cargo:
 *           type: string
 *           example: Gerente
 *         telefone:
 *           type: string
 *           example: "11988887777"
 *       required:
 *         - nome
 *         - email
 *         - cargo
 *
 *     FuncionarioCreate:
 *       type: object
 *       properties:
 *         nome:
 *           type: string
 *           example: Ana Souza
 *         email:
 *           type: string
 *           example: ana@email.com
 *         senha:
 *           type: string
 *           example: "123456"
 *         cargo:
 *           type: string
 *           example: Gerente
 *         telefone:
 *           type: string
 *           example: "11988887777"
 *       required:
 *         - nome
 *         - email
 *         - senha
 *         - cargo
 *
 *     FuncionarioUpdate:
 *       type: object
 *       properties:
 *         nome:
 *           type: string
 *           example: Ana Beatriz Souza
 *         cargo:
 *           type: string
 *           example: Supervisora
 *         telefone:
 *           type: string
 *           example: "11977776666"
 *
 *     # ============================================================
 *     # ENDEREÇO
 *     # ============================================================
 *     Endereco:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         rua:
 *           type: string
 *           example: Rua das Flores, 123
 *         numero:
 *           type: string
 *           example: "123"
 *         bairro:
 *           type: string
 *           example: Centro
 *         cidade:
 *           type: string
 *           example: São Paulo
 *         estado:
 *           type: string
 *           example: SP
 *         cep:
 *           type: string
 *           example: "01000-000"
 *       required:
 *         - rua
 *         - numero
 *         - bairro
 *         - cidade
 *         - estado
 *         - cep
 *
 *     EnderecoCreate:
 *       type: object
 *       properties:
 *         rua:
 *           type: string
 *           example: Rua das Flores
 *         numero:
 *           type: string
 *           example: "123"
 *         bairro:
 *           type: string
 *           example: Centro
 *         cidade:
 *           type: string
 *           example: São Paulo
 *         estado:
 *           type: string
 *           example: SP
 *         cep:
 *           type: string
 *           example: "01000-000"
 *       required:
 *         - rua
 *         - numero
 *         - bairro
 *         - cidade
 *         - estado
 *         - cep
 *
 *     EnderecoUpdate:
 *       type: object
 *       properties:
 *         rua:
 *           type: string
 *           example: Avenida Brasil
 *         numero:
 *           type: string
 *           example: "456"
 *         bairro:
 *           type: string
 *           example: Jardim Paulista
 *         cidade:
 *           type: string
 *           example: Campinas
 *         estado:
 *           type: string
 *           example: SP
 *         cep:
 *           type: string
 *           example: "13000-000"
 *
 *     # ============================================================
 *     # ALUGUEL
 *     # ============================================================
 *     Aluguel:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         clienteId:
 *           type: integer
 *           example: 1
 *         filmeId:
 *           type: integer
 *           example: 2
 *         funcionarioId:
 *           type: integer
 *           example: 1
 *         dataAluguel:
 *           type: string
 *           format: date-time
 *           example: "2025-10-07T12:00:00Z"
 *         dataDevolucao:
 *           type: string
 *           format: date-time
 *           example: "2025-10-10T12:00:00Z"
 *         valor:
 *           type: number
 *           example: 19.9
 *         status:
 *           type: string
 *           example: "Ativo"
 *       required:
 *         - clienteId
 *         - filmeId
 *         - funcionarioId
 *         - dataAluguel
 *         - dataDevolucao
 *         - valor
 *         - status
 *
 *     AluguelCreate:
 *       type: object
 *       properties:
 *         clienteId:
 *           type: integer
 *           example: 1
 *         filmeId:
 *           type: integer
 *           example: 2
 *         funcionarioId:
 *           type: integer
 *           example: 1
 *         dataAluguel:
 *           type: string
 *           format: date-time
 *           example: "2025-10-07T12:00:00Z"
 *         dataDevolucao:
 *           type: string
 *           format: date-time
 *           example: "2025-10-10T12:00:00Z"
 *         valor:
 *           type: number
 *           example: 19.9
 *         status:
 *           type: string
 *           example: "Ativo"
 *       required:
 *         - clienteId
 *         - filmeId
 *         - funcionarioId
 *         - dataAluguel
 *         - dataDevolucao
 *         - valor
 *         - status
 *
 *     AluguelUpdate:
 *       type: object
 *       properties:
 *         dataDevolucao:
 *           type: string
 *           format: date-time
 *           example: "2025-10-12T12:00:00Z"
 *         status:
 *           type: string
 *           example: "Devolvido"
 */
