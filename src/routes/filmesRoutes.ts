import { Router } from "express";
import {
  getFilmes,
  getFilmeById,
  createFilme,
  updateFilme,
  deleteFilme,
} from "../controllers/filmeController";
import { validateBody, validateParams } from "../middlewares/validation";
import { FilmeSchema, FilmeUpdateSchema } from "../schemas/validation";
import { z } from "zod";

const router = Router();

const idParamSchema = z.object({
  id: z.string().regex(/^\d+$/).transform(Number),
});

/**
 * @swagger
 * tags:
 *   name: Filmes
 *   description: Gerenciamento de filmes e seus gêneros
 */

/**
 * @swagger
 * /filmes:
 *   post:
 *     summary: Cadastra um novo filme
 *     tags: [Filmes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Filme'
 *           example:
 *             titulo: "Star Wars"
 *             anoLancamento: 1977
 *             classificacao: "12 anos"
 *             quantidade: 5
 *             generoId: 1
 *     responses:
 *       201:
 *         description: Filme criado com sucesso
 */
router.post("/", validateBody(FilmeSchema), createFilme);

/**
 * @swagger
 * /filmes:
 *   get:
 *     summary: Retorna todos os filmes cadastrados
 *     tags: [Filmes]
 *     responses:
 *       200:
 *         description: Lista de filmes
 */
router.get("/", getFilmes);

/**
 * @swagger
 * /filmes/{id}:
 *   get:
 *     summary: Retorna um filme pelo ID
 *     tags: [Filmes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do filme
 *     responses:
 *       200:
 *         description: Filme encontrado
 */
router.get("/:id", validateParams(idParamSchema), getFilmeById);

/**
 * @swagger
 * /filmes/{id}:
 *   put:
 *     summary: Atualiza os dados de um filme existente
 *     tags: [Filmes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do filme a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Filme'
 *           example:
 *             titulo: "Star Wars: O Império Contra-Ataca"
 *             anoLancamento: 1980
 *             classificacao: "12 anos"
 *             quantidade: 3
 *             generoId: 1
 *     responses:
 *       200:
 *         description: Filme atualizado com sucesso
 */
router.put(
  "/:id",
  validateParams(idParamSchema),
  validateBody(FilmeUpdateSchema),
  updateFilme
);

/**
 * @swagger
 * /filmes/{id}:
 *   delete:
 *     summary: Remove um filme existente
 *     tags: [Filmes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do filme a ser removido
 *     responses:
 *       204:
 *         description: Filme deletado com sucesso
 */
router.delete("/:id", validateParams(idParamSchema), deleteFilme);

export default router;
