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
 *         - id
 *         - nome
 *
 *     GeneroCreate:
 *       type: object
 *       properties:
 *         nome:
 *           type: string
 *           example: Comédia
 *       required:
 *         - nome
 *
 *     GeneroUpdate:
 *       type: object
 *       properties:
 *         nome:
 *           type: string
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
 *         titulo:
 *           type: string
 *         generoId:
 *           type: integer
 *         anoLancamento:
 *           type: integer
 *           description: Ano de lançamento do filme
 *         quantidade:
 *           type: integer
 *           description: Quantidade disponível em estoque
 *       required:
 *         - id
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
 *           example: Matrix
 *         generoId:
 *           type: integer
 *           example: 1
 *         anoLancamento:
 *           type: integer
 *           example: 1999
 *         quantidade:
 *           type: integer
 *           example: 5
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
 *
 *     # ============================================================
 *     # CLIENTE
 *     # ============================================================
 *     Cliente:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         nome:
 *           type: string
 *         email:
 *           type: string
 *         telefone:
 *           type: string
 *       required:
 *         - id
 *         - nome
 *         - email
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
 *         telefone:
 *           type: string
 *           example: "11999999999"
 *       required:
 *         - nome
 *         - email
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
 *
 *     # ============================================================
 *     # FUNCIONÁRIO
 *     # ============================================================
 *     Funcionario:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         nome:
 *           type: string
 *         email:
 *           type: string
 *         cargo:
 *           type: string
 *       required:
 *         - id
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
 *
 *     # ============================================================
 *     # ENDEREÇO
 *     # ============================================================
 *     Endereco:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         rua:
 *           type: string
 *         cidade:
 *           type: string
 *         estado:
 *           type: string
 *       required:
 *         - id
 *         - rua
 *         - cidade
 *         - estado
 *
 *     EnderecoCreate:
 *       type: object
 *       properties:
 *         rua:
 *           type: string
 *           example: Rua das Flores, 123
 *         cidade:
 *           type: string
 *           example: São Paulo
 *         estado:
 *           type: string
 *           example: SP
 *       required:
 *         - rua
 *         - cidade
 *         - estado
 *
 *     EnderecoUpdate:
 *       type: object
 *       properties:
 *         rua:
 *           type: string
 *           example: Avenida Brasil, 456
 *         cidade:
 *           type: string
 *           example: Campinas
 *         estado:
 *           type: string
 *           example: SP
 *
 *     # ============================================================
 *     # ALUGUEL
 *     # ============================================================
 *     Aluguel:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         clienteId:
 *           type: integer
 *         filmeId:
 *           type: integer
 *         dataAluguel:
 *           type: string
 *           format: date-time
 *         dataDevolucao:
 *           type: string
 *           format: date-time
 *         valor:
 *           type: number
 *         status:
 *           type: string
 *           example: "Ativo"
 *       required:
 *         - id
 *         - clienteId
 *         - filmeId
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
