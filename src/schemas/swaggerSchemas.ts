/**
 * @swagger
 * components:
 *   schemas:
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
 *     Filme:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         titulo:
 *           type: string
 *         generoId:
 *           type: integer
 *       required:
 *         - titulo
 *         - generoId
 *
 *     Cliente:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         nome:
 *           type: string
 *         email:
 *           type: string
 *       required:
 *         - nome
 *         - email
 *
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
 *         - nome
 *         - email
 *         - cargo
 *
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
 *         - rua
 *         - cidade
 *         - estado
 *
 *     Aluguel:
 *       type: object
 *       properties:
 *         id:
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
 *       required:
 *         - dataAluguel
 *         - dataDevolucao
 *         - valor
 *         - status
 */
